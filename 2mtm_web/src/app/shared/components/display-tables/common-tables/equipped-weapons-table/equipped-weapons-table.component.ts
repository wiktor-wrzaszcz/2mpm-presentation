import { combineLatest, Subscription } from 'rxjs';
import { ItemsUtils } from 'src/app/utils/items.utils';
import { SkillsUtils } from 'src/app/utils/skills-utils';
import StringUtils from 'src/app/utils/string.utils';
import { FirearmWeaponSubtype } from 'src/be-models/interfaces/item-definitions/enums/firearm-weapon-subtype.enum';
import { MeleeType } from 'src/be-models/interfaces/item-definitions/enums/melee-type.enum';
import { ReachType } from 'src/be-models/interfaces/item-definitions/enums/reach-type.enum';
import { Slot } from 'src/be-models/interfaces/item-definitions/enums/slot.enum';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { ColumnDefinition } from '../../../table/models';
import { distinctUntilKeyChanged, filter } from 'rxjs/operators';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { CreaturePopulated } from 'src/be-models/interfaces/characters/base-creature';

This is a placeholder for equipped-weapons-table.component.ts
