import { BehaviorSubject } from 'rxjs';
import { ItemDefinitionsStoreService } from 'src/app/core/api/stores/item-definitions.store';
import { LootPoolStoreService } from 'src/app/core/api/stores/lootpools.store';
import { ModStoreService } from 'src/app/core/api/stores/mods.store';
import { ItemCreator } from 'src/app/core/item-creator';
import { TableUtils } from 'src/app/shared/components/table/table-utils';
import { ItemsUtils } from 'src/app/utils/items.utils';
import StringUtils from 'src/app/utils/string.utils';
import {
  AttachmentsSlot,
  AttachmentsSlotObj,
  WeaponFirearmAttachmentSlot,
} from 'src/be-models/interfaces/item-definitions/enums/attachment-slot.enum';
import FirearmWeaponType from 'src/be-models/interfaces/item-definitions/types/firearm-weapon-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import LootPool, {
  LootPoolRecord,
  LootPoolRecordType,
} from 'src/be-models/interfaces/lootpools/lootpool.interface';
import BaseMod, { ModType } from 'src/be-models/interfaces/mods/mod.interface';
import { SingleLootPoolResolver } from './single-loot-pool.resolver';
import { LootPoolsResolversUtils } from './loot-pools-resolvers.utils';
import { AmmoMagazineResolver } from './ammo-magazine.resolver';

export interface LootPoolTableElement {
  id: string;
  name: string;
  expandableChildren: LootPoolTableElement[];
  qualitative?: boolean;
}

export interface RollResolution {
  mainItem: LootPoolRecord;
  additionalDataMap: Map<string, any>;
}

export class LootPoolsResolver {
  lootPoolsTree: LootPoolTableElement[];
  itemCreator: ItemCreator;

  singleLootPoolResolver: SingleLootPoolResolver;
  ammoMagazineResolver: AmmoMagazineResolver;

  lowerAmountAmmunitionWeaponTypes = [
    'T420_grenade_launcher',
    'T28_Barrage_Multibarrel_grenade_launcher',
    'RPG_launcher',
    'WM_Mjolnir_anti-tank_laucher',
  ].map((x) => x + '_default');

  /** Initializes the resolver with required stores and creates the helper resolver instances for single pool and ammo/magazine rolls. */
  constructor(
    private lootPoolsStore: LootPoolStoreService,
    private itemDefinitionsStore: ItemDefinitionsStoreService,
    private modsStore: ModStoreService,
    selectedQualityTier$: BehaviorSubject<number>
  ) {
    this.itemCreator = new ItemCreator(itemDefinitionsStore);
    this.singleLootPoolResolver = new SingleLootPoolResolver(
      lootPoolsStore,
      selectedQualityTier$
    );
    this.ammoMagazineResolver = new AmmoMagazineResolver(
      lootPoolsStore,
      itemDefinitionsStore,
      this.itemCreator,
      this.singleLootPoolResolver
    );
  }

  /**
   * Loads all loot pool definitions and builds the hierarchical tree structure
   * used to display the loot pool table in the UI.
   * Returns the populated tree or undefined if the root loot pool has no records.
   */
  async initializeLootPoolsTableData(): Promise<LootPoolTableElement[]> {
    const allLootPools = await this.lootPoolsStore.getLootPoolDefinitions;
    const rootLootpool = allLootPools.find((x) => x.id === 'Root');

    if (!rootLootpool.records) {
      return;
    }

    this.lootPoolsTree = rootLootpool.records
      .map((singleRecord) => {
        const recordLootPool = allLootPools.find(
          (y) => y.id.toLowerCase() === singleRecord.targetId.toLowerCase()
        );
        if (recordLootPool) {
          return this.populateLootpoolVisibleTreeChildren(
            recordLootPool,
            allLootPools
          );
        }
        console.log(singleRecord);
        return;
      })
      .filter((x) => !!x);
    return this.lootPoolsTree;
  }

  /** Performs a loot pool roll for the given pool ID and converts the roll results into fully configured game items. */
  async resolveLootPoolItems(id: string) {
    const rollResolutions: RollResolution[] =
      await this.singleLootPoolResolver.resolveSingleLootPool(id);

    return this.changeRollWinnerToItems(rollResolutions, id);
  }

  /**
   * Converts a list of roll resolution results into fully populated BaseItem instances.
   * Handles stackable and non-stackable items separately, applies type-specific conditions
   * (such as ammo and magazine rolls for firearms), and generates any additional sibling items
   * (e.g. spare magazines).
   */
  private async changeRollWinnerToItems(
    rollResolutions: RollResolution[],
    rootLootPoolId: string
  ): Promise<BaseItem[]> {
    const itemsArray: BaseItem[] = [];

    for (const rollResolution of rollResolutions) {
      const resolvedQuantity = LootPoolsResolversUtils.resolveQuantity(
        rollResolution.mainItem.quantity
      );
      const itemCreated = await this.itemCreator.createItemFromDefinitionId(
        rollResolution.mainItem.targetId + '_default',
        false,
        true
      );

      try {
        if (itemCreated.itemDef.stackable) {
          itemCreated.amount = resolvedQuantity;
          this.resolveLootPoolAdditionalData(rollResolution, itemCreated);
          this.resolveTypeSpecificConditionsForItem(itemCreated);

          ItemsUtils.recalculateWeightSizeAndCapOfItem(itemCreated);
          itemsArray.push(itemCreated);
        } else {
          for (let index = 0; index < resolvedQuantity; index++) {
            const itemCopy = ItemsUtils.duplicateItem(itemCreated);
            this.resolveLootPoolAdditionalData(rollResolution, itemCopy);
            this.resolveTypeSpecificConditionsForItem(itemCopy);
            ItemsUtils.recalculateWeightSizeAndCapOfItem(itemCopy);
            itemsArray.push(itemCopy);
            this.resolveAdditionalTypeSpecificItems(itemCopy, itemsArray);
          }
        }
      } catch (error) {
        console.error(
          'issue with itemDef, not found:',
          rollResolution.mainItem.targetId + '_default'
        );
      }
    }

    if (itemsArray.some((x) => x == null)) {
      console.error(
        'some lootpool winners couldnt be changed to items, for loot pool resolution: ',
        rollResolutions
      );
    }

    return itemsArray;
  }

  /** Applies type-specific post-processing for an item. For firearms, resolves non-ammo attachments and triggers ammo/magazine rolls. */
  private resolveTypeSpecificConditionsForItem(item: BaseItem) {
    if (item.itemDef.type === 'firearm') {
      this.resolveNonAmmoAttachments(item);

      this.ammoMagazineResolver.resolveAmmoAndMagazineRolls(
        item as BaseItem<FirearmWeaponType>
      );
    }
  }

  /**
   * Generates and appends additional sibling items for the provided item based on its type.
   * For firearms with detachable magazines, rolls up to three spare loaded magazines.
   * For firearms with internal magazines, generates and splits ammo stacks to respect the stack-size limit.
   * Special lower-capacity weapon types receive reduced or no additional ammo.
   */
  private async resolveAdditionalTypeSpecificItems(
    item: BaseItem,
    itemsArray: BaseItem[]
  ) {
    if (item.itemDef.type === 'firearm') {
      const hasItemMagazineAttachment =
        !item.itemDef.hasInternalMagazine &&
        item.itemDef.allowedAttachmentSlots.some(
          (x) => x === AttachmentsSlotObj.Magazine
        );

      const hasInternalMagazine =
        item.itemDef.hasInternalMagazine &&
        item.itemDef.allowedAttachmentSlots.some(
          (x) => x === AttachmentsSlotObj.Ammo
        );

      const ammoItemDefinition = (
        await this.itemDefinitionsStore.getItemDefinitions
      ).find(
        (x) => x.type === 'ammunition' && x.cartridge === item.itemDef.cartridge
      );

      if (hasItemMagazineAttachment) {
        for (let index = 0; index < 3; index++) {
          const magazineItem =
            await this.ammoMagazineResolver.resolveItemMagazineRoll(
              item as BaseItem<FirearmWeaponType>,
              ammoItemDefinition,
              true
            );
          if (magazineItem) {
            itemsArray.push(magazineItem);
          }
        }
      }

      if (hasInternalMagazine) {
        const tempAmmoArray: BaseItem[] = [];
        const isSpecialLowerAmountAmmo =
          this.lowerAmountAmmunitionWeaponTypes.includes(
            (item as BaseItem<FirearmWeaponType>).itemDef.id
          );

        // for now, never give additional ammo stacks
        if (isSpecialLowerAmountAmmo) {
          return;
        }
        for (
          let index = 0;
          index < (isSpecialLowerAmountAmmo ? 1 : 3);
          index++
        ) {
          const maxAmount = Math.min(
            10,
            Math.max(
              isSpecialLowerAmountAmmo ? 1 : 4,
              (item as BaseItem<FirearmWeaponType>).itemDef.internalMagazineSize
            )
          );
          const itemAmmo = this.ammoMagazineResolver.generateAmmoItemWithAmount(
            ammoItemDefinition,
            maxAmount,
            isSpecialLowerAmountAmmo
          );
          if (itemAmmo) {
            tempAmmoArray.push(itemAmmo);
          }
        }

        // We need to do this weird "translation" as internalMagazine size CAN be higher than stacksize
        const totalAmount: number = tempAmmoArray.reduce(
          (prev, curr) => prev + curr.amount,
          0
        );

        if (totalAmount > 0) {
          const tempSingleAmmoItem: BaseItem =
            this.itemCreator.createItemFromDefinition(ammoItemDefinition);
          tempSingleAmmoItem.amount = totalAmount;
          ItemsUtils.recalculateWeightSizeAndCapOfItem(tempSingleAmmoItem);

          const finalAmmoItems = [];
          TableUtils.recursivelySplitStackableStack(
            tempSingleAmmoItem,
            finalAmmoItems
          );
          itemsArray.push(...finalAmmoItems);
        }
      }
    }
  }

  /**
   * Rolls attachments for each non-ammo, non-magazine slot of a firearm item.
   * For barrel slots the matching attachment definition is looked up by cartridge compatibility,
   * tier, and attachment type (compensator or silencer). For other slots, the item is created
   * directly from its definition ID. Skips slots whose roll result is 'null'.
   */
  private async resolveNonAmmoAttachments(
    item: BaseItem<Partial<FirearmWeaponType>>
  ) {
    for (const attachmentSlot of item.itemDef.allowedAttachmentSlots.filter(
      (x) =>
        ![
          WeaponFirearmAttachmentSlot.Magazine,
          WeaponFirearmAttachmentSlot.Ammo,
        ].includes(x)
    )) {
      const attachmentRollResolution =
        await this.singleLootPoolResolver.resolveSingleLootPool(
          item.itemDef.subtype + '_' + attachmentSlot.toLowerCase()
        );
      const attachmentRollItemResult = attachmentRollResolution?.[0].mainItem;
      if (attachmentRollItemResult.targetId === 'null') {
        continue;
      }

      if (attachmentSlot === WeaponFirearmAttachmentSlot.Barrel) {
        try {
          const newAttachmentDef = (
            await this.itemDefinitionsStore.getItemDefinitions
          ).find(
            (x) =>
              x.attachmentSlot === WeaponFirearmAttachmentSlot.Barrel &&
              (attachmentRollItemResult.additionalData
                ? x.tier === Number(attachmentRollItemResult.additionalData)
                : x.tier === undefined) &&
              x.cartridge === item.itemDef.cartridge &&
              (attachmentRollItemResult.targetId === 'Compensator'
                ? x.name.includes('compensator')
                : x.name.includes('silencer'))
          );
          const attachmentItemCreated =
            this.itemCreator.createItemFromDefinition(newAttachmentDef);
          attachmentItemCreated.parentContainerId = item.id + attachmentSlot;
          attachmentItemCreated.parentItemId = item.id;

          item.attachments[attachmentSlot] = [attachmentItemCreated];
          item.attachmentsIds[attachmentSlot] = [attachmentItemCreated.id];
        } catch (error) {
          console.error(attachmentRollItemResult, item.itemDef.cartridge);
        }
      } else {
        const attachmentItemCreated =
          await this.itemCreator.createItemFromDefinitionId(
            attachmentRollItemResult.targetId + '_default'
          );

        attachmentItemCreated.parentContainerId = item.id + attachmentSlot;
        attachmentItemCreated.parentItemId = item.id;

        item.attachments[attachmentSlot] = [attachmentItemCreated];
        item.attachmentsIds[attachmentSlot] = [attachmentItemCreated.id];
      }
    }
  }

  /**
   * Reads the additional data map stored on a roll resolution and applies loot-pool-specific
   * post-processing to the main item (e.g. rolling ballistic modules for armor,
   * rolling mods for non-ballistic armor or melee weapons, or filling a liquid container).
   */
  private resolveLootPoolAdditionalData(
    rollResolution: RollResolution,
    mainItem: BaseItem
  ) {
    for (const [
      lootPoolId,
      additionalData,
    ] of rollResolution.additionalDataMap.entries()) {
      switch (lootPoolId) {
        case 'Ballistic_armor':
        case 'Light_Ballistic_armor': {
          this.resolveAttachmentsForSpecificLootpool(
            'Ballistic_module',
            mainItem,
            AttachmentsSlotObj.Module,
            additionalData
          );
          break;
        }
        case 'NonBallistic_armor':
        case 'Light_NonBallistic_armor': {
          this.resolveModsForSpecificLootpool(
            'NonBallistic_armor_mod',
            mainItem,
            ModType.Armor,
            additionalData
          );
          break;
        }
        case 'Melee_weapon': {
          this.resolveModsForSpecificLootpool(
            'Melee_weapon_mod',
            mainItem,
            ModType.Melee,
            additionalData
          );
          break;
        }
        case 'Food_Alcohol':
        case 'Food_Drinks':
        case 'Food_Canned':
        case 'Food_Stockpile':
        case 'Kitchen':
        case 'Farm':
        case 'Industrial':
        case 'Military_PMC':
        case 'US_Military_stock':
        case 'US_Military_supplies': {
          this.resolveLiquid(mainItem, additionalData);
          break;
        }
      }
    }
  }

  /**
   * Creates a liquid item instance from the given definition ID, sets its amount to the
   * bottle's full capacity, links it as a child of the bottle via parent IDs, and attaches
   * it to the bottle's liquid slot. Recalculates the weight and size of both items afterwards.
   */
  private async resolveLiquid(bottleItem: BaseItem, liquidDefId: string) {
    const liquidItem = await this.itemCreator.createItemFromDefinitionId(
      liquidDefId + '_default'
    );
    liquidItem.amount = bottleItem.itemDef.capacity;
    ItemsUtils.recalculateWeightSizeAndCapOfItem(liquidItem);

    liquidItem.parentContainerId = bottleItem.id + AttachmentsSlotObj.Liquid;
    liquidItem.parentItemId = bottleItem.id;
    bottleItem.attachments[AttachmentsSlotObj.Liquid] = [liquidItem];
    bottleItem.attachmentsIds[AttachmentsSlotObj.Liquid] = [liquidItem].map(
      (x) => x.id
    );

    ItemsUtils.recalculateWeightSizeAndCapOfItem(bottleItem);
  }

  /**
   * Rolls the specified loot pool repeatedly until the required number of unique attachments
   * is collected, then assigns them to the main item's attachment slot.
   * Duplicate attachments are skipped to ensure variety.
   */
  private async resolveAttachmentsForSpecificLootpool(
    targetLootPoolId: string,
    mainItem: BaseItem,
    attachmentsSlot: AttachmentsSlot,
    additionalData: any
  ) {
    const amountOfAttachments = Number(additionalData);
    const attachmentsArray: BaseItem[] = [];
    while (attachmentsArray.length < amountOfAttachments) {
      try {
        const attachment =
          await this.singleLootPoolResolver.resolveSingleLootPool(
            targetLootPoolId
          );
        if (
          !!attachment?.[0] &&
          attachmentsArray.findIndex(
            (x) => attachment[0].mainItem.targetId + '_default' === x.itemDefId
          ) < 0
        ) {
          attachmentsArray.push(
            await this.itemCreator.createItemFromDefinitionId(
              attachment[0].mainItem.targetId + '_default',
              false,
              true
            )
          );
        }
      } catch (error) {
        console.error(
          'error:',
          attachmentsArray,
          targetLootPoolId,
          mainItem,
          attachmentsSlot,
          additionalData
        );
      }
    }

    attachmentsArray.forEach((x) => {
      x.parentContainerId = mainItem.id + attachmentsSlot;
      x.parentItemId = mainItem.id;
    });
    mainItem.attachments[attachmentsSlot] = attachmentsArray;
    mainItem.attachmentsIds[attachmentsSlot] = attachmentsArray.map(
      (x) => x.id
    );
    console.log('end of attachments roll', attachmentsArray);
  }

  /**
   * Rolls the specified mod loot pool until the required number of mods is gathered,
   * attaches them to the main item, and applies any durability bonus contributed by the mods.
   * For melee weapons, duplicate mods are allowed when the mod definition permits it.
   */
  private async resolveModsForSpecificLootpool(
    targetLootPoolId: string,
    mainItem: BaseItem,
    modType: ModType,
    additionalData: any
  ) {
    const amountOfMods = Number(additionalData);
    const modsArray: BaseMod[] = [];
    while (modsArray.length < amountOfMods) {
      const modRoll = await this.singleLootPoolResolver.resolveSingleLootPool(
        targetLootPoolId
      );
      const modCandidate = (await this.modsStore.getModDefinitions).find(
        (x) => x.id === modRoll?.[0]?.mainItem.targetId
      );
      if (
        // melee can have duplicates for mods
        (modType === ModType.Melee && modCandidate.allowMultiple) ||
        modsArray.findIndex((x) => modCandidate.id === x.id) < 0
      ) {
        modsArray.push(modCandidate);
      }
    }

    mainItem.mods = modsArray;
    if (mainItem.currentDurability) {
      mainItem.currentDurability +=
        ItemsUtils.resolveDurabilityModBonus(mainItem);
    }
    modsArray.forEach((x) => {
      console.log(x.id, x.tier);
    });
    console.log('end of mods roll');
  }

  /**
   * Recursively builds a LootPoolTableElement for the given loot pool by collecting its
   * non-internal child pools and converting them into nested table elements.
   * The qualitative flag is set when any record in the pool or its descendants has quality-tier data.
   */
  private populateLootpoolVisibleTreeChildren(
    targetLootPool: LootPool,
    allLootPools: LootPool[]
  ): LootPoolTableElement {
    const lootPoolVisibleChildren: LootPool[] = [];
    for (const singleRecord of targetLootPool.records) {
      if (
        !singleRecord.internal &&
        singleRecord.targetType === LootPoolRecordType.LootPool
      ) {
        const recordsLootPool = allLootPools.find(
          (y) => y.id === singleRecord.targetId
        );
        if (!recordsLootPool) {
          console.log(singleRecord.targetId);
        } else {
          lootPoolVisibleChildren.push(recordsLootPool);
        }
      }
    }

    const result: LootPoolTableElement = {
      expandableChildren: lootPoolVisibleChildren.map((x) => ({
        ...this.populateLootpoolVisibleTreeChildren(x, allLootPools),
        qualitative: x.records.some(
          (y) => y.Q1 || y.Q2 || y.Q3 || y.Q4 || y.Q5
        ),
      })),
      id: targetLootPool.id,
      name: this.removeDashAndCapitalize(
        StringUtils.wordsFromCamelCase(targetLootPool.id)
      ),
    };

    result.qualitative =
      targetLootPool.records.some(
        (y) => y.Q1 || y.Q2 || y.Q3 || y.Q4 || y.Q5
      ) || result.expandableChildren?.some((x) => x.qualitative);
    return result;
  }

  /** Replaces underscore-separated segments with a space and an uppercased letter, making an ID human-readable. The method is named 'removeDashAndCapitalize' but operates on underscores. */
  private removeDashAndCapitalize(input: string) {
    return input.replace(
      /(\_\w?)/g,
      (match, p1) => ' ' + p1.split('_')[1].toUpperCase()
    );
  }
}
