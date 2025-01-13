import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GamesService } from 'src/app/core/api/services/games-service/games.service';
import * as moment from 'moment-mini';
import { ActionsCellComponent } from 'src/app/shared/components/table/table-cell/cell-types/form-cells/actions-cell/actions-cell.component';
import { FormControl } from '@angular/forms';
import { TableManagerService } from 'src/app/shared/components/table/table-manager.service';
import { DestructiveOperationAlertService } from 'src/app/shared/alerts/destructive-operation.service';
import { EditCreateGameModalComponent } from 'src/app/pages/main-menu/games/components/edit-create-game-modal/edit-create-game-modal.component';
import { SelectSlotModalComponent } from 'src/app/pages/main-menu/games/components/select-slot-modal/select-slot-modal.component';
import { BehaviorSubject, Subscription, combineLatest, map } from 'rxjs';
import { Modify } from 'src/be-models/interfaces/utils';
import { OnlineSessionService } from 'src/app/core/api/services/online-session-service/online-session.service';
import { ScreenSizeService } from 'src/app/core/screen-size-service/screen-size.service';
import { GameDetailsSnapshotContent } from 'src/be-models/interfaces/snapshot/game-details-snapshot.interface';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { ModalAnimationsCreatorService } from 'src/app/shared/modals/modal-animations';

This is a placeholder for games-list.component.ts
