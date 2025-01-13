import { Component, HostBinding, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { debounceTime, filter, Subject, Subscription } from 'rxjs';
import { GamesService } from 'src/app/core/api/services/games-service/games.service';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { ScreenSizeService } from 'src/app/core/screen-size-service/screen-size.service';
import { DestructiveOperationAlertService } from 'src/app/shared/alerts/destructive-operation.service';
import { AnomalyAbilitiesCategories } from 'src/be-models/enums/abilities-categories';
import { CharacterPopulated } from 'src/be-models/interfaces/characters/character';
import { GameRole } from 'src/be-models/interfaces/games/game';

This is a placeholder for anomalies-table.component.ts
