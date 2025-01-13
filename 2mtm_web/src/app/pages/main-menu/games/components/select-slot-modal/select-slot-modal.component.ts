import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { LoggedUserName } from 'src/app/core/api/services/auth-service/auth.service';
import { GamesService } from 'src/app/core/api/services/games-service/games.service';
import { OnlineSessionService } from 'src/app/core/api/services/online-session-service/online-session.service';
import { PlayerSlotPopulatedRegistry } from 'src/be-models/interfaces/games/player-slot';
import { DestructiveOperationAlertService } from 'src/app/shared/alerts/destructive-operation.service';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { filter, take, timeout } from 'rxjs/operators';
import { AppService } from 'src/app/core/services/app.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { combineLatest } from 'rxjs';
import { GameDetailsSnapshotContent } from 'src/be-models/interfaces/snapshot/game-details-snapshot.interface';

This is a placeholder for select-slot-modal.component.ts
