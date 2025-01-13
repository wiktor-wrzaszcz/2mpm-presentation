import deepEqual from 'deep-equal';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { GameItemsUtils } from 'src/app/core/game/items/game-items-utils';
import GlobalUtils from 'src/app/utils/global-utils';
import { ItemsUtils } from 'src/app/utils/items.utils';
import { SkillsUtils } from 'src/app/utils/skills-utils';
import { CharacterPopulated } from 'src/be-models/interfaces/characters/character';
import { NPCPopulated } from 'src/be-models/interfaces/characters/npc';
import { DamageTypeObj } from 'src/be-models/interfaces/item-definitions/enums/damage-type.enum';
import { Slot } from 'src/be-models/interfaces/item-definitions/enums/slot.enum';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { ColumnDefinition } from '../../../table/models';
import { TextCellWithModifierComponent } from '../../../table/table-cell/cell-types/directly-editable-cells/text-cell-with-modifier/text-cell-with-modifier.component';
import { CellValueChangedData } from '../../../table/table-manager.service';
import { DisplayTableCreatureResolver } from '../display-table-creature-resolver.interface';
import { ArmorResistanceTableComponent } from './armor-resistance-table.component';

This is a placeholder for armor-resistance-table-player-npc.resolver.ts
