import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TableManagerService } from '../../../table/table-manager.service';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { ColumnDefinition } from '../../../table/models';
import { DirectlyEditableNumberCellComponent } from '../../../table/table-cell/cell-types/directly-editable-cells/directly-editable-number-cell/directly-editable-number-cell.component';
import { AppService } from 'src/app/core/services/app.service';
import { CharacterPopulated } from 'src/be-models/interfaces/characters/character';
import { NPCPopulated } from 'src/be-models/interfaces/characters/npc';
import { ToHitBonusTableResolver } from './to-hit-bonus-table.resolver';

This is a placeholder for to-hit-bonus-table.component.ts
