import { Injectable } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';
import { DragDropManagerService } from '../../services/drag-drop-manager/drag-drop-manager.service';
import { GameItemsUtils } from './game-items-utils';
import { ItemsRegisterStore } from './game-items-register.store';
import { ItemsSingleActionRegistryResolver } from './items-single-action-registry-resolver';
import { SingleActionZoneResolver } from './single-action-zone-resolver';
import { ItemsService } from '../../api/services/items-service/items-service.service';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { GameItemsRegistrySelectors } from './game-items-registry-selectors';
import { Container } from 'src/be-models/interfaces/containers/container';
import { GameRole } from 'src/be-models/interfaces/games/game';
import { ContainersRegisterStore } from '../containers/game-containers-register.store';
import { CharactersRegisterStore } from '../char-details/game-characters-register.store';
import { SessionActionExternalPayload } from '../action-external-payload';
import { GameDetailsRegisterManagerStore } from '../game-details/game-details-register-manager';
import { AppService } from '../../services/app.service';
import { ItemDefinitionsStoreService } from '../../api/stores/item-definitions.store';
import { ModStoreService } from '../../api/stores/mods.store';
import { ContainersUtils } from 'src/app/utils/containers.utils';
import { ToastController } from '@ionic/angular';
import { ZoneCurrentDragResolver } from './zone-current-drag.resolver';
import { AppDebugStaticService } from '../../app-debug-static-service';

This is a placeholder for game-items-register-manager.store.ts
