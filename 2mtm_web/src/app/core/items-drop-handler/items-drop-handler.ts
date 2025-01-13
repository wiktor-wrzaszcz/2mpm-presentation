import { CdkDragDrop, DragDropRegistry } from '@angular/cdk/drag-drop';
import { ModalController, ToastController } from '@ionic/angular';
import { AttachmentsSlotObj } from 'src/be-models/interfaces/item-definitions/enums/attachment-slot.enum';
import AggregatedAllItemsType from 'src/be-models/interfaces/item-definitions/types/aggregated-all-items-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { AmountModalComponent } from '../../shared/modals/in-game-modals/amount-modal/amount-modal.component';
import { EditableRowComponent } from '../../shared/components/table/editable-row/editable-row.component';
import { RowData } from '../../shared/components/table/models';
import { TableUtils } from '../../shared/components/table/table-utils';
import { StackableDropHandlerLogic } from './stackable-drop-handler';
import BallisticModuleType from 'src/be-models/interfaces/item-definitions/types/balistic-module-type.interface';
import { ItemsRegisterManagerStore } from '../game/items/game-items-register-manager.store';
import { ModalAnimationsCreatorService } from 'src/app/shared/modals/modal-animations';

This is a placeholder for items-drop-handler.ts
