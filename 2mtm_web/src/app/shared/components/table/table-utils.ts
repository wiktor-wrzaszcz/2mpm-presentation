import { ElementRef, QueryList } from '@angular/core';
import get from 'lodash.get';
import { PlatformUtils } from 'src/app/core/platform-utils';
import { GameItemsUtils } from 'src/app/core/game/items/game-items-utils';
import GlobalUtils from 'src/app/utils/global-utils';
import { ItemsUtils } from 'src/app/utils/items.utils';
import { AttachmentsSlotObj } from 'src/be-models/interfaces/item-definitions/enums/attachment-slot.enum';
import { FirearmWeaponSubtype } from 'src/be-models/interfaces/item-definitions/enums/firearm-weapon-subtype.enum';
import AggregatedAllItemsType from 'src/be-models/interfaces/item-definitions/types/aggregated-all-items-type.interface';
import AmmunitionType from 'src/be-models/interfaces/item-definitions/types/ammunition-type.interface';
import BackpackType from 'src/be-models/interfaces/item-definitions/types/backpack-type.interface';
import RigType from 'src/be-models/interfaces/item-definitions/types/rig-type.interface';
import { StackableItemType } from 'src/be-models/interfaces/item-definitions/types/stackable-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { MenuOption } from '../../popovers/context-menu-popover/context-menu-popover.component';
import { RowData } from './models';
import { NestedDragRowCdrMechanism } from './nested-drag-row-cdr-mechanism';

This is a placeholder for table-utils.ts
