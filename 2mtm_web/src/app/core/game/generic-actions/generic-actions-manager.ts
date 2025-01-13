import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionActionExternalPayload } from '../action-external-payload';
import { GenericAction } from './generic.actions';
import { GenericSingleActionResolver } from './generic-single-action-resolver';
import { GameDetailsRegisterManagerStore } from '../game-details/game-details-register-manager';
import { ItemsRegisterStore } from '../items/game-items-register.store';
import { ContainersRegisterStore } from '../containers/game-containers-register.store';
import { ItemDefinitionsStoreService } from '../../api/stores/item-definitions.store';
import { ItemsRegisterManagerStore } from '../items/game-items-register-manager.store';
import { CharactersRegisterStore } from '../char-details/game-characters-register.store';
import { AbilitiesStoreService } from '../../api/stores/abilities.store';
import { AppService } from '../../services/app.service';

This is a placeholder for generic-actions-manager.ts
