import { IonSearchbar, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { TableManagerService } from 'src/app/shared/components/table/table-manager.service';
import { MenuOption } from 'src/app/shared/popovers/context-menu-popover/context-menu-popover.component';
import StringUtils from 'src/app/utils/string.utils';
import BaseItemType from 'src/be-models/interfaces/item-definitions/types/base-item-type.interface';
import { StackableItemType } from 'src/be-models/interfaces/item-definitions/types/stackable-type.interface';
import { CreateNewCharacterManagerService } from '../create-new-character-manager.service';
import get from 'lodash.get';
import { NumberCellComponent } from 'src/app/shared/components/table/table-cell/cell-types/form-cells/number-cell/number-cell.component';
import { ShopLogic } from './shop-logic';
import AggregatedAllItemsType from 'src/be-models/interfaces/item-definitions/types/aggregated-all-items-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { ItemCreator } from 'src/app/core/item-creator';
import { ItemDefinitionsStoreService } from 'src/app/core/api/stores/item-definitions.store';
import { ModStoreService } from 'src/app/core/api/stores/mods.store';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { ItemsRegisterStore } from 'src/app/core/game/items/game-items-register.store';
import { ScreenSizeService } from 'src/app/core/screen-size-service/screen-size.service';
import { AppService } from 'src/app/core/services/app.service';

This is a placeholder for buy-starting-equipment.component.ts
