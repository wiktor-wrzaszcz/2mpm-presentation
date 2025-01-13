import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import deepEqual from 'deep-equal';
import { merge, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { SkillsUtils } from 'src/app/utils/skills-utils';
import StringUtils from 'src/app/utils/string.utils';
import { CreaturePopulated } from 'src/be-models/interfaces/characters/base-creature';
import { CharacterPopulated } from 'src/be-models/interfaces/characters/character';
import { MonsterPopulatedWithDefinition } from 'src/be-models/interfaces/characters/monster';
import { NPCPopulated } from 'src/be-models/interfaces/characters/npc';
import { Skill } from '../../../../../../be-models/enums/skills.const';
import { ColumnDefinition } from '../../../table/models';
import { DirectlyEditableTextCellComponent } from '../../../table/table-cell/cell-types/directly-editable-cells/directly-editable-text-cell/text-cell/directly-editable-text-cell.component';
import { TextCellWithModifierComponent } from '../../../table/table-cell/cell-types/directly-editable-cells/text-cell-with-modifier/text-cell-with-modifier.component';
import { TableManagerService } from '../../../table/table-manager.service';

This is a placeholder for skills-table.component.ts
