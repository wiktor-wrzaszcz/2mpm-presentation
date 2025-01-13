import deepEqual from 'deep-equal';
import { merge, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { TraitsUtils } from 'src/app/utils/traits-utils';
import { Attributes } from 'src/be-models/interfaces/characters/attributes';
import { CreaturePopulated } from 'src/be-models/interfaces/characters/base-creature';
import { CharacterPopulated } from 'src/be-models/interfaces/characters/character';
import { MonsterPopulatedWithDefinition } from 'src/be-models/interfaces/characters/monster';
import { NPCPopulated } from 'src/be-models/interfaces/characters/npc';
import { ColumnDefinition } from '../../../table/models';
import { DirectlyEditableNumberCellComponent } from '../../../table/table-cell/cell-types/directly-editable-cells/directly-editable-number-cell/directly-editable-number-cell.component';
import { DirectlyEditableTextCellComponent } from '../../../table/table-cell/cell-types/directly-editable-cells/directly-editable-text-cell/text-cell/directly-editable-text-cell.component';
import { TableManagerService } from '../../../table/table-manager.service';
import { AttributesTableMonsterResolver } from './attributes-table-monster.resolver';
import { AttributesTablePlayerNpcResolver } from './attributes-table-player-npc.resolver';

This is a placeholder for attributes-table.component.ts
