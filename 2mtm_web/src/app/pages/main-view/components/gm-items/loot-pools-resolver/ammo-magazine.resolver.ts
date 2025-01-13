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

  constructor(
    private lootPoolsStore: LootPoolStoreService,
    private itemDefinitionsStore: ItemDefinitionsStoreService,
    private itemCreator: ItemCreator,
    private singleLootPoolResolver: SingleLootPoolResolver
  ) {}

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
