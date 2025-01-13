import { CdkDragEnter, CdkDragStart } from '@angular/cdk/drag-drop';
import { ModalController, ToastController } from '@ionic/angular';
import { Subject, Subscription, take } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DragDropManagerService } from 'src/app/core/services/drag-drop-manager/drag-drop-manager.service';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { DestructiveOperationAlertService } from 'src/app/shared/alerts/destructive-operation.service';
import { ColumnDefinitions } from 'src/app/shared/components/table/models';
import { NestedDragRowCdrMechanism } from 'src/app/shared/components/table/nested-drag-row-cdr-mechanism';
import { ContextMenuActionsResolver } from 'src/app/shared/components/table/resolvers/context-menu-resolver';
import { baseItemsTableColumnDefinitions } from 'src/app/shared/constants/base-item-table-column-definitions';
import StringUtils from 'src/app/utils/string.utils';
import { Slot } from 'src/be-models/interfaces/item-definitions/enums/slot.enum';
import { BodySlotDragDropLogic } from './body-slot-drag-drop-logic';
import { ItemCreator } from 'src/app/core/item-creator';
import { ScreenSizeService } from 'src/app/core/screen-size-service/screen-size.service';
import { TableUtils } from 'src/app/shared/components/table/table-utils';
import { ModalAnimationsCreatorService } from 'src/app/shared/modals/modal-animations';

This is a placeholder for body-slot.component.ts
