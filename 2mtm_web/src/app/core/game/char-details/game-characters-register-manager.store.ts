import { Injectable } from '@angular/core';
import { concatMap, map, switchMap, take } from 'rxjs/operators';
import { CharDetailsSingleActionRegistryResolver } from './character-single-action-registry-resolver';
import { CharacterService } from '../../api/services/character-service/character.service';
import { CharactersRegisterStore } from './game-characters-register.store';
import { SessionActionExternalPayload } from '../action-external-payload';
import { ConditionsStoreService } from '../../api/stores/conditions.store';
import { AbilitiesStoreService } from '../../api/stores/abilities.store';
import { GameDetailsRegisterManagerStore } from '../game-details/game-details-register-manager';
import { MonsterDefinitionsStoreService } from '../../api/stores/monster-definitions.store';
import { CreatureType } from 'src/be-models/interfaces/characters/creature-type.enum';
import { CharactersUtils } from './game-characters-utils';
import { NPC } from 'src/be-models/interfaces/characters/npc';
import { AppService } from '../../services/app.service';
import { TraitStoreService } from '../../api/stores/traits.store';
import { BackgroundStoreService } from '../../api/stores/backgrounds.store';

This is a placeholder for game-characters-register-manager.store.ts
