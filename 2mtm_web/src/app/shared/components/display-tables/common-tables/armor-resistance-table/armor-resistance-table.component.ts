import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { combineLatest, merge, Subscription } from 'rxjs';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { TableManagerService } from '../../../table/table-manager.service';
import { filter } from 'rxjs/operators';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { MonsterPopulatedWithDefinition } from 'src/be-models/interfaces/characters/monster';
import { NPCPopulated } from 'src/be-models/interfaces/characters/npc';
import { CharacterPopulated } from 'src/be-models/interfaces/characters/character';
import { ArmorResistanceTableMonsterResolver } from './armor-resistance-table-monster.resolver';
import { ArmorResistanceTablePlayerNpcResolver } from './armor-resistance-table-player-npc.resolver';

This is a placeholder for armor-resistance-table.component.ts
