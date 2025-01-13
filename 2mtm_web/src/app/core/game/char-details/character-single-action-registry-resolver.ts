import { firstValueFrom, lastValueFrom, withLatestFrom } from 'rxjs';
import GlobalUtils from 'src/app/utils/global-utils';
import { AbilityExchangeCombination } from 'src/be-models/enums/ability-exchange-combination';
import { Attributes } from 'src/be-models/interfaces/characters/attributes';
import { CharacterPopulated } from 'src/be-models/interfaces/characters/character';
import { NPCPopulated } from 'src/be-models/interfaces/characters/npc';
import Condition from 'src/be-models/interfaces/conditions/condition';
import ConsumableItemType from 'src/be-models/interfaces/item-definitions/types/consumable-type.interface';
import { NoteWithoutContent } from 'src/be-models/interfaces/notes/note';
import { AbilitiesStoreService } from '../../api/stores/abilities.store';
import { BackgroundStoreService } from '../../api/stores/backgrounds.store';
import { ConditionsStoreService } from '../../api/stores/conditions.store';
import { MonsterDefinitionsStoreService } from '../../api/stores/monster-definitions.store';
import { TraitStoreService } from '../../api/stores/traits.store';
import { CharactersUtils } from './game-characters-utils';

This is a placeholder for character-single-action-registry-resolver.ts
