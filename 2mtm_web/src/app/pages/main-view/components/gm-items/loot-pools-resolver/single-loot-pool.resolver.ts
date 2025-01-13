import { LootPoolStoreService } from 'src/app/core/api/stores/lootpools.store';
import { RollResolution } from './loot-pools.resolver';
import LootPool, {
  LootPoolRecord,
  LootPoolRecordType,
} from 'src/be-models/interfaces/lootpools/lootpool.interface';
import { BehaviorSubject } from 'rxjs';
import { LootPoolsResolversUtils } from './loot-pools-resolvers.utils';

export class SingleLootPoolResolver {
  constructor(
    private lootPoolsStore: LootPoolStoreService,
    private selectedQualityTier$: BehaviorSubject<number>
  ) {}
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
