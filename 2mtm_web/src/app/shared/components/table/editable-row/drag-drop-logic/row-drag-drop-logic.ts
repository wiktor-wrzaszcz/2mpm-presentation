import { combineLatest, Subscription } from 'rxjs';
import { filter, startWith } from 'rxjs/operators';
import { Slot } from 'src/be-models/interfaces/item-definitions/enums/slot.enum';
import AggregatedAllItemsType from 'src/be-models/interfaces/item-definitions/types/aggregated-all-items-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { RowData } from '../../models';
import { TableUtils } from '../../table-utils';
import { EditableRowComponent } from '../editable-row.component';

This is a placeholder for row-drag-drop-logic.ts
