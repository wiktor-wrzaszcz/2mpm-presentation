import get from 'lodash.get';
import { merge, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { TableUtils } from 'src/app/shared/components/table/table-utils';
import { AttachmentsSlotObj } from 'src/be-models/interfaces/item-definitions/enums/attachment-slot.enum';
import { Slot } from 'src/be-models/interfaces/item-definitions/enums/slot.enum';
import AggregatedAllItemsType from 'src/be-models/interfaces/item-definitions/types/aggregated-all-items-type.interface';
import FirearmWeaponType from 'src/be-models/interfaces/item-definitions/types/firearm-weapon-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { BodySlotComponent } from './body-slot.component';
import { ShootingLogic } from './shooting-logic';

This is a placeholder for body-slot-drag-drop-logic.ts
