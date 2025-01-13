import { Injectable } from '@angular/core';
import { SessionActionExternalPayload } from '../action-external-payload';
import { Hideout } from 'src/be-models/interfaces/hideouts/hideout.interface';
import { HideoutsAction, HideoutsActionType } from './hideouts-actions';
import { HideoutsActionResolver } from './hideouts-action-resolver';
import { GameDetailsRegisterManagerStore } from '../game-details/game-details-register-manager';
import { HideoutsService } from '../../api/services/hideouts-service/hideouts.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { StateFetchingService } from '../../api/services/online-session-service/state-fetching.service';
import deepEqual from 'deep-equal';
import { LoggedUserName } from '../../api/services/auth-service/auth.service';
import { CharactersRegisterStore } from '../char-details/game-characters-register.store';
import { AppService } from '../../services/app.service';
import { GameRole } from 'src/be-models/interfaces/games/game';

This is a placeholder for hideouts-registry-manager.ts
