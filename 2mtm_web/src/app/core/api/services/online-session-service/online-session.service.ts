import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Socket } from 'socket.io-client';
import { ItemsAction } from 'src/app/core/game/items/game-items-actions';
import { ItemsRegisterStore } from 'src/app/core/game/items/game-items-register.store';
import { EventType, NavigationEnd, Router } from '@angular/router';
import { debounceTime, filter, take, tap, skip } from 'rxjs/operators';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { ContainersAction } from 'src/app/core/game/containers/game-containers-actions';
import { ContainersRegisterStore } from 'src/app/core/game/containers/game-containers-register.store';
import { ContainersRegisterManagerStore } from 'src/app/core/game/containers/game-containers-register-manager.store';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { CharDetailsAction } from 'src/app/core/game/char-details/game-character-actions';
import { CharactersRegisterStore } from 'src/app/core/game/char-details/game-characters-register.store';
import { GameDetailsAction } from 'src/app/core/game/game-details/game-details.actions';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { GenericActionManagerStore } from 'src/app/core/game/generic-actions/generic-actions-manager';
import { GenericAction } from 'src/app/core/game/generic-actions/generic.actions';
import { HideoutsAction } from 'src/app/core/game/hideouts/hideouts-actions';
import { HideoutsRegisterManagerStore } from 'src/app/core/game/hideouts/hideouts-registry-manager';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { StateFetchingService } from './state-fetching.service';
import { VehiclesRegisterManagerStore } from 'src/app/core/game/vehicles/vehicles-registry-manager';
import { VehiclesAction } from 'src/app/core/game/vehicles/vehicles-actions';
import { AuthService } from '../auth-service/auth.service';
import { StatePartType } from 'src/app/utils/snapshots.utils';

This is a placeholder for online-session.service.ts
