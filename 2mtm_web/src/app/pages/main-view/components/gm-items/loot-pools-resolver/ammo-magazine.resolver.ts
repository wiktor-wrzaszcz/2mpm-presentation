import { ItemDefinitionsStoreService } from 'src/app/core/api/stores/item-definitions.store';
import { LootPoolStoreService } from 'src/app/core/api/stores/lootpools.store';
import { ItemCreator } from 'src/app/core/item-creator';
import { ItemsUtils } from 'src/app/utils/items.utils';
import { AttachmentsSlotObj } from 'src/be-models/interfaces/item-definitions/enums/attachment-slot.enum';
import FirearmWeaponType from 'src/be-models/interfaces/item-definitions/types/firearm-weapon-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { SingleLootPoolResolver } from './single-loot-pool.resolver';
import AmmunitionType from 'src/be-models/interfaces/item-definitions/types/ammunition-type.interface';
import AggregatedAllItemsType from 'src/be-models/interfaces/item-definitions/types/aggregated-all-items-type.interface';

export class AmmoMagazineResolver {
  ammoPercentageFillmentRoll = [
    { Q0: 3, value: 0 },
    { Q0: 2, value: 0.25 },
    { Q0: 3, value: 0.5 },
    { Q0: 4, value: 0.75 },
    { Q0: 10, value: 1 },
  ];

  lowerAmountAmmunitionTypes = [
    'T420_grenade_launcher',
    'T28_Barrage_Multibarrel_grenade_launcher',
    'RPG_launcher',
    'WM_Mjolnir_anti-tank_laucher',
  ].map((x) => x + '_default');

  /** Injects the stores and helper services needed for ammo and magazine resolution. */
  constructor(
    private lootPoolsStore: LootPoolStoreService,
    private itemDefinitionsStore: ItemDefinitionsStoreService,
    private itemCreator: ItemCreator,
    private singleLootPoolResolver: SingleLootPoolResolver
  ) {}

  /**
   * Determines whether the firearm uses an internal magazine or a detachable one,
   * then delegates to the appropriate resolution method to populate the ammo slot.
   */
  public async resolveAmmoAndMagazineRolls(item: BaseItem<FirearmWeaponType>) {
    const ammoItemDefinition = (
      await this.itemDefinitionsStore.getItemDefinitions
    ).find(
      (x) => x.type === 'ammunition' && x.cartridge === item.itemDef.cartridge
    );
    const hasInternalMagazine =
      item.itemDef.hasInternalMagazine &&
      item.itemDef.allowedAttachmentSlots.some(
        (x) => x === AttachmentsSlotObj.Ammo
      );

    if (hasInternalMagazine) {
      this.resolveInternalMagazineRoll(item, ammoItemDefinition);
    } else {
      this.resolveItemMagazineRoll(item, ammoItemDefinition);
    }
  }

  /**
   * Generates an ammo item sized to the weapon's internal magazine capacity and attaches it
   * to the firearm's internal ammo slot. Skips attachment if the generated amount is zero.
   * Recalculates weight and capacity for both the ammo instance and the parent firearm.
   */
  public resolveInternalMagazineRoll(
    item: BaseItem<FirearmWeaponType>,
    ammoItemDefinition: AggregatedAllItemsType
  ) {
    let ammoItemInstance = this.generateAmmoItemWithAmount(
      ammoItemDefinition,
      item.itemDef.internalMagazineSize,
      this.lowerAmountAmmunitionTypes.includes(item.itemDef.id)
    );
    if (ammoItemInstance.amount === 0) {
      return;
    }
    ammoItemInstance.parentItemId = item.id;
    ammoItemInstance.parentContainerId = item.id + AttachmentsSlotObj.Ammo;

    ItemsUtils.recalculateWeightSizeAndCapOfItem(ammoItemInstance);

    item.attachments[AttachmentsSlotObj.Ammo] = [ammoItemInstance];
    item.attachmentsIds[AttachmentsSlotObj.Ammo] = [ammoItemInstance.id];

    ItemsUtils.recalculateWeightSizeAndCapOfItem(item);
  }

  /**
   * Rolls a magazine type for the firearm, generates a loaded ammo item inside it, and either
   * attaches the magazine directly to the firearm or returns it as a standalone item when
   * asSeparateItem is true. Returns undefined if no valid magazine is found.
   */
  public async resolveItemMagazineRoll(
    item: BaseItem<FirearmWeaponType>,
    ammoItemDefinition: AggregatedAllItemsType,
    asSeparateItem = false
  ): Promise<BaseItem> {
    let magazineItemInstance: BaseItem = undefined;

    magazineItemInstance = await this.rollMagazineForFirearmItem(
      item as BaseItem<FirearmWeaponType>
    );

    if (magazineItemInstance === undefined) {
      console.log('no magazine found');
      return;
    }

    let ammoItemInstance = this.generateAmmoItemWithAmount(
      ammoItemDefinition,
      magazineItemInstance.itemDef.capacity,
      this.lowerAmountAmmunitionTypes.includes(item.itemDef.id)
    );

    if (ammoItemInstance.amount !== 0) {
      ammoItemInstance.parentItemId = magazineItemInstance.id;
      ammoItemInstance.parentContainerId =
        magazineItemInstance.id + AttachmentsSlotObj.Ammo;

      magazineItemInstance.attachments[AttachmentsSlotObj.Ammo] = [
        ammoItemInstance,
      ];
      magazineItemInstance.attachmentsIds[AttachmentsSlotObj.Ammo] = [
        ammoItemInstance.id,
      ];
    }

    if (asSeparateItem) {
      ItemsUtils.recalculateWeightSizeAndCapOfItem(magazineItemInstance);
      return magazineItemInstance;
    }

    this.attachMagazineToItem(magazineItemInstance, item);
  }

  /** Links the magazine to the firearm's magazine slot by setting parent references and attachment collections, then recalculates both items' weight and capacity. */
  private attachMagazineToItem(magazineItemInstance: BaseItem, item: BaseItem) {
    magazineItemInstance.parentItemId = item.id;
    magazineItemInstance.parentContainerId =
      item.id + AttachmentsSlotObj.Magazine;

    ItemsUtils.recalculateWeightSizeAndCapOfItem(magazineItemInstance);

    item.attachments[AttachmentsSlotObj.Magazine] = [magazineItemInstance];
    item.attachmentsIds[AttachmentsSlotObj.Magazine] = [
      magazineItemInstance.id,
    ];

    ItemsUtils.recalculateWeightSizeAndCapOfItem(item);
  }

  /**
   * Rolls the magazine type loot pool for the firearm's subtype, then locates an allowed magazine
   * definition that matches the rolled type. If the initially rolled type is not compatible with
   * the weapon's allowed magazines, falls back to progressively lower-priority records until a
   * match is found or the list is exhausted. Returns undefined if no compatible magazine exists.
   */
  public async rollMagazineForFirearmItem(item: BaseItem<FirearmWeaponType>) {
    let magazineItemInstance: BaseItem = undefined;
    const magazineLootPool = (
      await this.lootPoolsStore.getLootPoolDefinitions
    ).find((x) => x.id === item.itemDef.subtype + '_magazine');
    const magazineTypeRollResolution = (
      await this.singleLootPoolResolver.resolveSingleLootPool(
        item.itemDef.subtype + '_magazine'
      )
    )?.[0]?.mainItem;
    if (magazineTypeRollResolution?.targetId === 'null') {
      return;
    }

    let magazineType = magazineTypeRollResolution.targetId;

    let magazineLootPoolRecordIndex = magazineLootPool.records.findIndex(
      (x) => x.targetId === magazineTypeRollResolution.targetId
    );

    while (magazineItemInstance === undefined) {
      let allowedMagazineId = undefined;
      if (magazineTypeRollResolution.targetId === 'Standard') {
        // -.- standard does not have "Standard" in it's id
        allowedMagazineId = item.itemDef.allowedMagazines.find(
          (x) =>
            !x.includes('Drum'.toLowerCase()) &&
            !x.includes('Extended'.toLowerCase()) &&
            !x.includes('Belt'.toLowerCase())
        );
      } else {
        allowedMagazineId = item.itemDef.allowedMagazines.find((x) =>
          x.includes(magazineType.toLowerCase())
        );
      }
      if (allowedMagazineId === undefined) {
        magazineLootPoolRecordIndex -= 1;
        if (magazineLootPoolRecordIndex < 1) {
          return;
        }
        magazineType =
          magazineLootPool.records[magazineLootPoolRecordIndex].targetId;
      } else {
        magazineItemInstance =
          await this.itemCreator.createItemFromDefinitionId(allowedMagazineId);
      }
    }
    return magazineItemInstance;
  }

  /**
   * Creates an ammunition item instance and assigns it a rolled amount up to maxAmount.
   * For special lower-capacity weapons a fully random fill factor is used; for all other
   * weapons a weighted percentage factor is rolled from ammoPercentageFillmentRoll.
   * Recalculates item weight and capacity after setting the amount.
   */
  public generateAmmoItemWithAmount(
    ammoItemDefinition: AggregatedAllItemsType,
    maxAmount: number,
    isSpecialLowerAmountAmmo = false
  ): BaseItem<AmmunitionType> {
    const ammoFactor = this.rollAmmoFactor();

    const ammoItemInstance =
      this.itemCreator.createItemFromDefinition(ammoItemDefinition);
    ammoItemInstance.amount = Math.round(
      (isSpecialLowerAmountAmmo ? Math.random() : ammoFactor) * maxAmount
    );

    ItemsUtils.recalculateWeightSizeAndCapOfItem(ammoItemInstance);

    return ammoItemInstance;
  }

  /**
   * Performs a weighted random roll over ammoPercentageFillmentRoll to determine the fill
   * percentage for an ammo stack. Returns a value between 0 and 1 representing the fraction
   * of the maximum capacity to use.
   */
  private rollAmmoFactor(): number {
    let rollFactor =
      this.ammoPercentageFillmentRoll.reduce((acc, curr) => curr.Q0 + acc, 0) *
      Math.random();
    let winnerValue = 0;

    for (const { Q0, value } of this.ammoPercentageFillmentRoll) {
      rollFactor -= Q0;
      if (rollFactor < 0) {
        winnerValue = value;
        break;
      }
    }

    return winnerValue;
  }
}
