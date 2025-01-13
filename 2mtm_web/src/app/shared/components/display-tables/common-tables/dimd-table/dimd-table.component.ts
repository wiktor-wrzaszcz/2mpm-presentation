import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { AbilityPopulated } from 'src/be-models/interfaces/abilities/ability.interface';
import { CreaturePopulated } from 'src/be-models/interfaces/characters/base-creature';
import { CharacterPopulated } from 'src/be-models/interfaces/characters/character';
import { MonsterPopulatedWithDefinition } from 'src/be-models/interfaces/characters/monster';
import { NPCPopulated } from 'src/be-models/interfaces/characters/npc';
import { TableManagerService } from '../../../table/table-manager.service';
import { DimdTableMonsterResolver } from './dimd-table-monster.resolver';
import { DimdTablePlayerNpcResolver } from './dimd-table-player-npc.resolver';

This is a placeholder for dimd-table.component.ts
