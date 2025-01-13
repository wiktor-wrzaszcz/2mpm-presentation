import { IonInput } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { GameFeedRecord } from 'src/be-models/interfaces/game-feed/game-feed.interface';
import { GameRole } from 'src/be-models/interfaces/games/game';

This is a placeholder for game-feed.component.ts
