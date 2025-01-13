import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { combineLatest, of, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { AbilitiesStoreService } from 'src/app/core/api/stores/abilities.store';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import StringUtils from 'src/app/utils/string.utils';
import { AbilityDetailsModalComponent } from '../../../../modals/in-game-modals/ability-details-modal/ability-details-modal.component';
import { AbilitiesSearchModalComponent } from '../../../../modals/in-game-modals/abilities-search-modal/abilities-search-modal.component';
import { SelectMultilistStateRecordsGrouped } from '../../../select-abilities/select-abilities-manager.service';
import { ColumnDefinition, ColumnDefinitions } from '../../../table/models';
import { TextWithInformationCellComponent } from '../../../table/table-cell/cell-types/form-cells/text-with-information-cell/text-with-information-cell.component';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { MonsterPopulatedWithDefinition } from 'src/be-models/interfaces/characters/monster';
import { GameRole } from 'src/be-models/interfaces/games/game';
import { DestructiveOperationAlertService } from 'src/app/shared/alerts/destructive-operation.service';
import { ModalAnimationsCreatorService } from 'src/app/shared/modals/modal-animations';

This is a placeholder for abilities-table.component.ts
