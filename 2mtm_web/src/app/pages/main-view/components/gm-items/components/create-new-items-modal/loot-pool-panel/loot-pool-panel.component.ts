import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  Optional,
  ViewChild,
} from '@angular/core';
import { ItemDefinitionsStoreService } from 'src/app/core/api/stores/item-definitions.store';
import { LootPoolStoreService } from 'src/app/core/api/stores/lootpools.store';
import { ModStoreService } from 'src/app/core/api/stores/mods.store';
import { ItemsAddAction } from 'src/app/core/game/items/game-items-actions';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { GameItemsUtils } from 'src/app/core/game/items/game-items-utils';
import { ColumnDefinition } from 'src/app/shared/components/table/models';
import { TableComponent } from 'src/app/shared/components/table/table/table.component';
import GlobalUtils from 'src/app/utils/global-utils';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { Modify } from 'src/be-models/interfaces/utils';
import { EquipmentTableElement } from '../../../../create-new-character/buy-starting-equipment/buy-starting-equipment.component';
import {
  LootPoolTableElement,
  LootPoolsResolver,
} from '../../../loot-pools-resolver/loot-pools.resolver';
import { basketColumnDefinitions } from '../new-items-modal-basket-column-definitions';
import { LootPoolWithQuantitativeCell } from 'src/app/shared/components/table/table-cell/cell-types/feature-specific-cells/loot-pool-with-quantitative-cell/loot-pool-with-quantitative-cell.component';
import { BehaviorSubject } from 'rxjs';
import { ItemsUtils } from 'src/app/utils/items.utils';

@Component({
  selector: 'app-loot-pool-panel',
  templateUrl: './loot-pool-panel.component.html',
  styleUrls: ['./loot-pool-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LootPoolPanelComponent {
  @ViewChild('table') lootPoolRollTable: TableComponent;

  lootPoolResultsHeight = '250px';
  basketColumnDefinitions = {};
  selectedQualityTier$: BehaviorSubject<number> = new BehaviorSubject<number>(
    1
  );

  @Input() addingDisabled = false;

  constructor(
    public itemDefinitionsStore: ItemDefinitionsStoreService,
    @Optional() private lootpoolsStore: LootPoolStoreService,
    modsStore: ModStoreService,
    private gameItemsRegisterManager: ItemsRegisterManagerStore,
    private cdr: ChangeDetectorRef
  ) {
    const { actions, ...rest } = basketColumnDefinitions;
    this.basketColumnDefinitions = rest;
    this.lootPoolsResolver = new LootPoolsResolver(
      lootpoolsStore,
      itemDefinitionsStore,
      modsStore,
      this.selectedQualityTier$
    );
  }

  async ngOnInit() {
    if (this.lootpoolsStore) {
      this.lootPoolsData =
        await this.lootPoolsResolver.initializeLootPoolsTableData();
      this.cdr.markForCheck();
    }
  }

  lootPoolColumnDef = {
    name: ColumnDefinition.apply({
      id: 'name',
      title: 'Loot Pool',
      width: 200,
      cssClass: 'disable-text-selection',
      cellComponentType: LootPoolWithQuantitativeCell,
      directRowFieldsCdrTrigger: true,
    }),
  };

  lootPoolsData: LootPoolTableElement[] = [];
  lootPoolResults: EquipmentTableElement[] = [];
  lootPoolsResolver: LootPoolsResolver;

  async handleLootPoolSelection(lootPoolSelected: LootPoolTableElement) {
    this.lootPoolResults = await this.lootPoolsResolver.resolveLootPoolItems(
      lootPoolSelected.id
    );
    // open children's containers after table resolves new data
    setTimeout(() => this.lootPoolRollTable.openAllChildrensContainers(), 0);
  }

  lootPoolQualityChanged(event) {
    this.selectedQualityTier$.next(Number(event.detail.value));
  }

  moveItemsToPicked(event) {
    if (this.addingDisabled) {
      return;
    }

    if (this.lootPoolResults.length > 0) {
      this.gameItemsRegisterManager.actions.resolveLocalActionsRequest$.next(
        this.lootPoolResults.concat([]).flatMap((item) => {
          // remove actions from table
          const itemsArray = this.duplicateItemAndUpdateChildrenIds(item);

          itemsArray.forEach((x) => {
            // need to add actions from target table
            (x as EquipmentTableElement).actions = [
              { id: 'remove', icon: 'remove-circle-outline' },
            ];
          });

          return itemsArray.map(this.createRegistryItemsAddActionFromItem);
        })
      );
    }
    // }
  }

  private clearContainerItemsAndAttachments(item: BaseItem) {
    if (item.containerItemsIds) {
      item.containerItemsIds = [];
    }
    if (item.containerItems) {
      item.containerItems = [];
    }
    for (const attachmentSlot of GlobalUtils.ensureArrayType(
      item.itemDef.allowedAttachmentSlots
    )) {
      if (item.attachments?.[attachmentSlot]?.length > 0) {
        item.attachments[attachmentSlot] = [];
      }
      if (item.attachmentsIds[attachmentSlot]?.length > 0) {
        // a bit convoluted, but here we need to "strip" main item of attachmentIds for created default attachment
        // as it will duplicate it because of registry system/approach
        item.attachmentsIds[attachmentSlot] = [];
      }
    }
  }

  private duplicateItemAndUpdateChildrenIds(baseItem: BaseItem): BaseItem[] {
    const returnArray = [];

    const directChildren = GameItemsUtils.getFlatStructureOfItemWithChildren(
      JSON.parse(JSON.stringify(baseItem)),
      true
    );

    const { actions, ...baseItemCopy } = ItemsUtils.duplicateItem(
      directChildren.shift()
    ) as Modify<BaseItem, { actions: any }>;

    returnArray.push(baseItemCopy);

    for (const child of directChildren) {
      child.parentContainerId =
        baseItemCopy.id + child.parentContainerId.split(baseItem.id)[1];
      child.parentItemId = baseItemCopy.id;
      returnArray.push(...this.duplicateItemAndUpdateChildrenIds(child));

      this.clearContainerItemsAndAttachments(baseItemCopy);
    }

    return returnArray;
  }

  private createRegistryItemsAddActionFromItem(
    itemPayload: BaseItem
  ): ItemsAddAction {
    return new ItemsAddAction(
      itemPayload,
      // needed check for nested items, they won't land in the same place
      itemPayload.parentContainerId === undefined
        ? 'picked'
        : itemPayload.parentContainerId,
      itemPayload.parentItemId ?? undefined,
      undefined
    );
  }
}
