import { ModalController } from '@ionic/angular';
import { combineLatest, Subscription } from 'rxjs';
import { ConditionsStoreService } from 'src/app/core/api/stores/conditions.store';
import { GameItemsUtils } from 'src/app/core/game/items/game-items-utils';
import GlobalUtils from 'src/app/utils/global-utils';
import { ColumnDefinition } from '../../../table/models';
import { ConditionDetailsModalComponent } from './details-modal/condition-details-modal.component';
import { ConditionSearchModalComponent } from './search-modal/condition-search-modal.component';
import { filter } from 'rxjs/operators';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { CreaturePopulated } from 'src/be-models/interfaces/characters/base-creature';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import StatsBonus from 'src/be-models/interfaces/shared/stats-bonus.interface';
import StringUtils from 'src/app/utils/string.utils';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { Slot } from 'src/be-models/interfaces/item-definitions/enums/slot.enum';
import { ModalAnimationsCreatorService } from 'src/app/shared/modals/modal-animations';

This is a placeholder for condition-effects-table.component.ts
