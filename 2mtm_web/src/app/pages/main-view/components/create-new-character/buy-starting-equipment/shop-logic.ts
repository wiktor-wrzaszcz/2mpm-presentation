import get from 'lodash.get';
import { ItemCreator } from 'src/app/core/item-creator';
import { EditableRowComponent } from 'src/app/shared/components/table/editable-row/editable-row.component';
import { TableUtils } from 'src/app/shared/components/table/table-utils';
import AggregatedAllItemsType from 'src/be-models/interfaces/item-definitions/types/aggregated-all-items-type.interface';
import AmmunitionType from 'src/be-models/interfaces/item-definitions/types/ammunition-type.interface';
import BaseItemType from 'src/be-models/interfaces/item-definitions/types/base-item-type.interface';
import LiquidType from 'src/be-models/interfaces/item-definitions/types/liquid-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { EquipmentCustomizationModalResponse } from './buy-equipment-amount-modal/buy-equipment-customization-modal.component';
import { EquipmentTableElement } from './buy-starting-equipment.component';
import { ItemsUtils } from 'src/app/utils/items.utils';
import { ItemsRegisterStore } from 'src/app/core/game/items/game-items-register.store';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import GlobalUtils from 'src/app/utils/global-utils';

This is a placeholder for shop-logic.ts
