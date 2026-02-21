import { LootPoolStoreService } from 'src/app/core/api/stores/lootpools.store';
import { RollResolution } from './loot-pools.resolver';
import LootPool, {
  LootPoolRecord,
  LootPoolRecordType,
} from 'src/be-models/interfaces/lootpools/lootpool.interface';
import { BehaviorSubject } from 'rxjs';
import { LootPoolsResolversUtils } from './loot-pools-resolvers.utils';

export class SingleLootPoolResolver {
  /** Initializes the resolver with the loot pool data store and the current quality tier observable. */
  constructor(
    private lootPoolsStore: LootPoolStoreService,
    private selectedQualityTier$: BehaviorSubject<number>
  ) {}

  /**
   * Recursively resolves a loot pool roll for the given pool ID.
   * Rolls a winner record from the pool using the current quality tier, then follows
   * nested pool references until a concrete item record is reached.
   * The additionalDataMap accumulates contextual data (e.g. tier modifiers) encountered
   * along the resolution path and is attached to each final RollResolution result.
   */
  public async resolveSingleLootPool(
    id: string,
    additionalDataMap?: Map<string, any>
  ): Promise<RollResolution[]> {
    additionalDataMap ??= new Map<string, any>();

    const rollResolutions: RollResolution[] = [];

    const lootPoolInstance = (
      await this.lootPoolsStore.getLootPoolDefinitions
    ).find((x) => x.id.toLowerCase() === id.toLowerCase());

    if (!lootPoolInstance) {
      console.error('missing loot pool instance for id:', id);
      return;
    }

    const q0Sum = lootPoolInstance.records.reduce(
      (acc, curr) => acc + (curr['Q0'] ?? 0),
      0
    );

    let rollWinner: LootPoolRecord;

    if (q0Sum > 0) {
      rollWinner = this.rollLootPoolWinner(q0Sum, lootPoolInstance, 'Q0');
    } else {
      rollWinner = this.rollQualityTierRecurs(
        lootPoolInstance,
        this.selectedQualityTier$.value
      );
    }
    if (rollWinner.additionalData) {
      additionalDataMap.set(rollWinner.lootPoolId, rollWinner.additionalData);
    }
    switch (rollWinner.targetType) {
      case LootPoolRecordType.LootPool:
      case LootPoolRecordType.Liquid: {
        const quantityResolved = LootPoolsResolversUtils.resolveQuantity(
          rollWinner.quantity
        );
        if (quantityResolved > 1) {
          const rollResult = await this.resolveSingleLootPool(
            rollWinner.targetId,
            additionalDataMap
          );
          for (let index = 0; index < quantityResolved; index++) {
            rollResolutions.push(...rollResult);
          }
        } else {
          rollResolutions.push(
            ...(await this.resolveSingleLootPool(
              rollWinner.targetId,
              additionalDataMap
            ))
          );
        }
        break;
      }
      default: {
        rollResolutions.push({ mainItem: rollWinner, additionalDataMap });
      }
    }
    return rollResolutions;
  }

  /**
   * Attempts to roll a winner for the requested quality tier.
   * If no records carry weight for that tier, increments the tier and retries recursively.
   * Returns undefined if the tier exceeds 5 and no valid tier is found.
   */
  private rollQualityTierRecurs(
    lootPoolInstance: LootPool,
    qualityTier: number
  ): LootPoolRecord {
    const specifiedQualitySum = lootPoolInstance.records.reduce(
      (acc, curr) => acc + (curr[`Q${qualityTier}`] ?? 0),
      0
    );

    if (specifiedQualitySum > 0) {
      return this.rollLootPoolWinner(
        specifiedQualitySum,
        lootPoolInstance,
        `Q${qualityTier}`
      );
    } else {
      if (qualityTier > 5) {
        return undefined;
      }
      return this.rollQualityTierRecurs(lootPoolInstance, qualityTier + 1);
    }
  }

  /**
   * Performs a weighted random selection over the loot pool records using the specified quality property.
   * Iterates through records, subtracting each record's weight from a random value until the counter
   * drops to zero or below, selecting that record as the winner.
   */
  private rollLootPoolWinner(
    qualitySum: number,
    lootPoolInstance: LootPool,
    qualityProperty: string = 'Q0'
  ): LootPoolRecord {
    let counter = Math.random() * qualitySum;
    let winner: LootPoolRecord = undefined;

    for (const record of lootPoolInstance.records) {
      counter = counter - (record[qualityProperty] ?? 0);
      if (counter <= 0) {
        winner = record;
        break;
      }
    }

    return winner;
  }
}
