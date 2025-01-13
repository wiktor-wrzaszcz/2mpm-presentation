import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContainerService } from 'src/app/core/api/services/containers-service/containers.service';
import { ContainersAddAction } from 'src/app/core/game/containers/game-containers-actions';
import { ItemsAddAction } from 'src/app/core/game/items/game-items-actions';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { Container } from 'src/be-models/interfaces/containers/container';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { EditCreateNewContainerModalComponent } from '../create-new-container-modal/edit-create-new-container-modal.component';
import { CreateNewItemsModalComponent } from '../create-new-items-modal/create-new-items-modal.component';
import { SelectableContainersManagerService } from '../../../../../../shared/components/selectable-container/selectable-containers-manager.service';
import { ContainersRegisterStore } from 'src/app/core/game/containers/game-containers-register.store';
import { ContainersRegisterManagerStore } from 'src/app/core/game/containers/game-containers-register-manager.store';
import { Modify } from 'src/be-models/interfaces/utils';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { delay, take } from 'rxjs/operators';
import { ItemsUtils } from 'src/app/utils/items.utils';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { DragDropManagerService } from 'src/app/core/services/drag-drop-manager/drag-drop-manager.service';
import { AppService } from 'src/app/core/services/app.service';
import { ModalAnimationsCreatorService } from 'src/app/shared/modals/modal-animations';

This is a placeholder for gm-items.component.ts
