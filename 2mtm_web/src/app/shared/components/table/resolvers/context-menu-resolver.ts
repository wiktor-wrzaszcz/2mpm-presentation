import { Optional } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { DragDropManagerService } from 'src/app/core/services/drag-drop-manager/drag-drop-manager.service';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { GameItemsUtils } from 'src/app/core/game/items/game-items-utils';
import { ShootingLogic } from 'src/app/pages/main-view/components/inventory/components/body-slots/body-slot/shooting-logic';
import { DestructiveOperationAlertService } from 'src/app/shared/alerts/destructive-operation.service';
import { AmountModalComponent } from 'src/app/shared/modals/in-game-modals/amount-modal/amount-modal.component';
import { ItemDetailsModalComponent } from 'src/app/shared/modals/in-game-modals/item-details-modal/item-details-modal.component';
import { ItemsUtils } from 'src/app/utils/items.utils';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { TableUtils } from '../table-utils';
import { ItemCreator } from 'src/app/core/item-creator';
import { TableComponent } from '../table/table.component';
import get from 'lodash.get';
import { ModalAnimationsCreatorService } from 'src/app/shared/modals/modal-animations';

This is a placeholder for context-menu-resolver.ts
