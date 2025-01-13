import { Injectable } from '@angular/core';
import { SessionActionExternalPayload } from '../action-external-payload';
import { VehiclePopulated } from 'src/be-models/interfaces/vehicles/vehicle.interface';
import { GameDetailsRegisterManagerStore } from '../game-details/game-details-register-manager';
import { VehiclesService } from '../../api/services/vehicles-service/vehicles.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { StateFetchingService } from '../../api/services/online-session-service/state-fetching.service';
import deepEqual from 'deep-equal';
import { LoggedUserName } from '../../api/services/auth-service/auth.service';
import { AppService } from '../../services/app.service';
import { VehiclesActionResolver } from './vehicles-action-resolver';
import { VehicleDefinitionsStoreService } from '../../api/stores/vehicles-definition.store';
import { GameVehicleUtils } from './game-vehicle-utils';
import { GameRole } from 'src/be-models/interfaces/games/game';
import { AppDebugStaticService } from '../../app-debug-static-service';

This is a placeholder for vehicles-registry-manager.ts
