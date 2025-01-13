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
import { basketColumnDefinitions } from '../new-items-modal-basket-column-definitions';
import { LootPoolWithQuantitativeCell } from 'src/app/shared/components/table/table-cell/cell-types/feature-specific-cells/loot-pool-with-quantitative-cell/loot-pool-with-quantitative-cell.component';
import { BehaviorSubject } from 'rxjs';
import { ItemsUtils } from 'src/app/utils/items.utils';

This is a placeholder for loot-pool-panel.component.ts
