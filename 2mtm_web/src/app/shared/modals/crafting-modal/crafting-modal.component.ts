import { Subscription } from 'rxjs';
import { AbilitiesStoreService } from 'src/app/core/api/stores/abilities.store';
import { ItemDefinitionsStoreService } from 'src/app/core/api/stores/item-definitions.store';
import { CharactersRegisterStore } from 'src/app/core/game/char-details/game-characters-register.store';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { ContainersRegisterStore } from 'src/app/core/game/containers/game-containers-register.store';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { GenericActionManagerStore } from 'src/app/core/game/generic-actions/generic-actions-manager';
import { GenericCraftingRequestAction } from 'src/app/core/game/generic-actions/generic.actions';
import { ItemsRegisterStore } from 'src/app/core/game/items/game-items-register.store';
import { ScreenSizeService } from 'src/app/core/screen-size-service/screen-size.service';
import { CraftingUtils } from 'src/app/utils/crafting-utils';
import StringUtils from 'src/app/utils/string.utils';
import { CharacterPopulated } from 'src/be-models/interfaces/characters/character';
import { Container } from 'src/be-models/interfaces/containers/container';
import AggregatedAllItemsType from 'src/be-models/interfaces/item-definitions/types/aggregated-all-items-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { ColumnDefinition } from '../../components/table/models';

This is a placeholder for crafting-modal.component.ts
