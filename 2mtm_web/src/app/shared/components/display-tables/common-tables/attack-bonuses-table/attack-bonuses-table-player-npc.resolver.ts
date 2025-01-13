import deepEqual from 'deep-equal';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import GlobalUtils from 'src/app/utils/global-utils';
import { SkillsUtils } from 'src/app/utils/skills-utils';
import { AttackBonus } from 'src/be-models/enums/attack-bonuses.enum';
import { CharacterPopulated } from 'src/be-models/interfaces/characters/character';
import { NPCPopulated } from 'src/be-models/interfaces/characters/npc';
import { ColumnDefinition } from '../../../table/models';
import { TextCellWithModifierComponent } from '../../../table/table-cell/cell-types/directly-editable-cells/text-cell-with-modifier/text-cell-with-modifier.component';
import { CellValueChangedData } from '../../../table/table-manager.service';
import { DisplayTableCreatureResolver } from '../display-table-creature-resolver.interface';
import { AttackBonusesTableComponent } from './attack-bonuses-table.component';

This is a placeholder for attack-bonuses-table-player-npc.resolver.ts
