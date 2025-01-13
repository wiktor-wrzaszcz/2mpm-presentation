import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { combineLatest, Subscription } from 'rxjs';
import { LoggedUserName } from 'src/app/core/api/services/auth-service/auth.service';
import { AppService } from 'src/app/core/services/app.service';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { CraftingModalComponent } from 'src/app/shared/modals/crafting-modal/crafting-modal.component';
import { DiceRollerComponent } from 'src/app/shared/modals/dice-roller-modal/dice-roller.component';
import { NotesModalComponent } from 'src/app/shared/modals/notes-modal/notes-modal.component';
import { GameRole } from 'src/be-models/interfaces/games/game';
import { MainMenuService } from '../main-menu/main-menu.service';
import { AnomaliesModalComponent } from 'src/app/shared/modals/anomalies-modal/anomalies-modal.component';
import { EditCreateGameModalComponent } from '../main-menu/games/components/edit-create-game-modal/edit-create-game-modal.component';
import { CreateGameRequest } from 'src/be-models/dtos/create-game-request';
import { GamesService } from 'src/app/core/api/services/games-service/games.service';
import { EditGameSettingsRequest } from 'src/be-models/dtos/edit-game-request';
import { GameDetailsInGameSettingsUpdate } from 'src/app/core/game/game-details/game-details.actions';
import { GameStatsService } from 'src/app/core/game-stats-service/game-stats.service';
import { HideoutsRegisterManagerStore } from 'src/app/core/game/hideouts/hideouts-registry-manager';
import { VehiclesRegisterManagerStore } from 'src/app/core/game/vehicles/vehicles-registry-manager';
import { ModalAnimationsCreatorService } from 'src/app/shared/modals/modal-animations';

This is a placeholder for main-view.page.ts
