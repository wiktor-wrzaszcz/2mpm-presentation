import { originalOrder } from 'src/app/shared/pipes/pipes.utils';
import { ColumnDefinitions, RowClickBehaviour, RowData } from '../models';
import { FormRecord } from '@angular/forms';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TableCellComponent } from '../table-cell/table-cell.component';
import deepEqual from 'deep-equal';
import { FormRulesResolver } from '../resolvers/form-rules.resolver';
import GlobalUtils from 'src/app/utils/global-utils';
import AggregatedAllItemsType from 'src/be-models/interfaces/item-definitions/types/aggregated-all-items-type.interface';
import { RowDragDropLogic } from './drag-drop-logic/row-drag-drop-logic';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { NestedDragRowCdrMechanism } from '../nested-drag-row-cdr-mechanism';
import { DragDropManagerService } from 'src/app/core/services/drag-drop-manager/drag-drop-manager.service';
import { ItemsUtils } from 'src/app/utils/items.utils';
import { ScreenSizeService } from 'src/app/core/screen-size-service/screen-size.service';

This is a placeholder for editable-row.component.ts
