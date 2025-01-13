import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { AbilityPopulated } from 'src/be-models/interfaces/abilities/ability.interface';
import { CharacterPopulated } from 'src/be-models/interfaces/characters/character';
import { NPCPopulated } from 'src/be-models/interfaces/characters/npc';
import { ColumnDefinition } from '../../../table/models';
import { TextCellWithModifierComponent } from '../../../table/table-cell/cell-types/directly-editable-cells/text-cell-with-modifier/text-cell-with-modifier.component';
import { TableManagerService } from '../../../table/table-manager.service';
import { AttackBonusesTablePlayerNpcResolver } from './attack-bonuses-table-player-npc.resolver';

This is a placeholder for attack-bonuses-table.component.ts
