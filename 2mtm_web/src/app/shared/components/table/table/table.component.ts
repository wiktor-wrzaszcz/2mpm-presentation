import { ColumnDefinitions, RowClickBehaviour, RowData } from '../models';
import { Subject, Subscription } from 'rxjs';
import { TableDragDropLogic } from './drag-drop-logic/table-drag-drop-logic';
import { NestedDragRowCdrMechanism } from '../nested-drag-row-cdr-mechanism';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import BackpackType from 'src/be-models/interfaces/item-definitions/types/backpack-type.interface';
import RigType from 'src/be-models/interfaces/item-definitions/types/rig-type.interface';
import { ModalController, ToastController } from '@ionic/angular';
import { TableDefaultContextMenuHandler } from './context-menu-logic/table-default-context-menu-handler';
import { DestructiveOperationAlertService } from 'src/app/shared/alerts/destructive-operation.service';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { EditableRowComponent } from '../editable-row/editable-row.component';
import { ItemCreator } from 'src/app/core/item-creator';
import { ScreenSizeService } from 'src/app/core/screen-size-service/screen-size.service';
import { ModalAnimationsCreatorService } from 'src/app/shared/modals/modal-animations';
import GlobalUtils from 'src/app/utils/global-utils';

This is a placeholder for table.component.ts
