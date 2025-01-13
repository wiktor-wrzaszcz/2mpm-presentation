import { ChangeDetectorRef, Component, OnInit, Self } from '@angular/core';
import { DragDropManagerService } from 'src/app/core/services/drag-drop-manager/drag-drop-manager.service';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { CreateNewCharacterManagerService } from '../create-new-character-manager.service';
import { ContainersRegisterStore } from 'src/app/core/game/containers/game-containers-register.store';
import { AlertController } from '@ionic/angular';
import { filter, Subscription, take } from 'rxjs';
import { SelectableContainersManagerService } from 'src/app/shared/components/selectable-container/selectable-containers-manager.service';
import { ScreenSizeService } from 'src/app/core/screen-size-service/screen-size.service';
import { AppService } from 'src/app/core/services/app.service';

This is a placeholder for equip-starting-items.component.ts
