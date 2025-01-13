import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription, concatMap } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { GameItemsUtils } from '../items/game-items-utils';
import { ItemsRegisterStore } from '../items/game-items-register.store';
import { ContainerService } from '../../api/services/containers-service/containers.service';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { Container } from 'src/be-models/interfaces/containers/container';
import { GameRole } from 'src/be-models/interfaces/games/game';
import { ContainersSingleActionRegistryResolver } from './containers-single-action-registry-resolver';
import { ContainersRegisterStore } from './game-containers-register.store';
import { SessionActionExternalPayload } from '../action-external-payload';
import { GameDetailsRegisterManagerStore } from '../game-details/game-details-register-manager';
import { StateFetchingService } from '../../api/services/online-session-service/state-fetching.service';
import { AppService } from '../../services/app.service';
import { AppDebugStaticService } from '../../app-debug-static-service';

This is a placeholder for game-containers-register-manager.store.ts
