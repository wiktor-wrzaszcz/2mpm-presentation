import { ChangeDetectorRef, Component, Input, Optional } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { combineLatest, filter, Subscription, take } from 'rxjs';
import { AbilitiesStoreService } from 'src/app/core/api/stores/abilities.store';
import { AvailableAbilityPoints } from 'src/app/core/game/char-details/game-characters-utils';
import { LevelUpService } from 'src/app/pages/main-view/components/level-up-character/level-up.service';
import StringUtils from 'src/app/utils/string.utils';
import { AbilityExchangeCombination } from 'src/be-models/enums/ability-exchange-combination';
import { CharacterPopulated } from 'src/be-models/interfaces/characters/character';
import { CreateNewCharacterManagerService } from '../../../pages/main-view/components/create-new-character/create-new-character-manager.service';
import { AbilitiesSearchModalComponent } from '../../modals/in-game-modals/abilities-search-modal/abilities-search-modal.component';
import { ModalAnimationsCreatorService } from '../../modals/modal-animations';
import { ShowAbilitiesModalComponent } from './show-abilities-modal/show-abilities-modal.component';

This is a placeholder for select-abilities.component.ts
