import { combineLatest, Subscription } from 'rxjs';
import { distinctUntilKeyChanged, filter, map } from 'rxjs/operators';
import { AbilitiesService } from 'src/app/core/api/services/abilities-service/abilities.service';
import { TraitStoreService } from 'src/app/core/api/stores/traits.store';
import { ScreenSizeService } from 'src/app/core/screen-size-service/screen-size.service';
import { ColumnDefinition } from 'src/app/shared/components/table/models';
import BaseTrait from 'src/be-models/interfaces/traits/trait.interface';
import { AlertController, ToastController } from '@ionic/angular';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { CharacterPopulated } from 'src/be-models/interfaces/characters/character';

This is a placeholder for pick-character-traits.component.ts
