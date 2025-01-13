import get from 'lodash.get';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { ItemDefinitionsStoreService } from 'src/app/core/api/stores/item-definitions.store';
import { ModStoreService } from 'src/app/core/api/stores/mods.store';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { ItemCreator } from 'src/app/core/item-creator';
import { AllowedAction } from 'src/app/shared/components/table/table-cell/cell-types/form-cells/actions-cell/actions-cell.component';
import { NumberCellComponent } from 'src/app/shared/components/table/table-cell/cell-types/form-cells/number-cell/number-cell.component';
import { TableManagerService } from 'src/app/shared/components/table/table-manager.service';
import { MenuOption } from 'src/app/shared/popovers/context-menu-popover/context-menu-popover.component';
import StringUtils from 'src/app/utils/string.utils';
import AggregatedAllItemsType from 'src/be-models/interfaces/item-definitions/types/aggregated-all-items-type.interface';
import BaseItemType from 'src/be-models/interfaces/item-definitions/types/base-item-type.interface';
import { StackableItemType } from 'src/be-models/interfaces/item-definitions/types/stackable-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { ShopLogic } from '../../../create-new-character/buy-starting-equipment/shop-logic';
import { Container } from 'src/be-models/interfaces/containers/container';
import { ItemsRegisterStore } from 'src/app/core/game/items/game-items-register.store';
import { GameItemsUtils } from 'src/app/core/game/items/game-items-utils';
import { LootPoolStoreService } from 'src/app/core/api/stores/lootpools.store';
import { AppService } from 'src/app/core/services/app.service';

This is a placeholder for create-new-items-modal.component.ts
