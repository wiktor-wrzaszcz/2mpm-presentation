import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { LoggedUserName } from 'src/app/core/api/services/auth-service/auth.service';
import { CharacterService } from 'src/app/core/api/services/character-service/character.service';
import { ItemDefinitionsStoreService } from 'src/app/core/api/stores/item-definitions.store';
import { LootPoolStoreService } from 'src/app/core/api/stores/lootpools.store';
import { ModStoreService } from 'src/app/core/api/stores/mods.store';
import { NpcLootPoolStoreService } from 'src/app/core/api/stores/npc-lootpools.store';
import { CharDetailsCharCreationRequested } from 'src/app/core/game/char-details/game-character-actions';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { CharactersRegisterStore } from 'src/app/core/game/char-details/game-characters-register.store';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { ContainersRegisterManagerStore } from 'src/app/core/game/containers/game-containers-register-manager.store';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { GameItemsUtils } from 'src/app/core/game/items/game-items-utils';
import { AppService } from 'src/app/core/services/app.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { MainViewUtils } from 'src/app/pages/main-view/utils/main-view-utils';
import { ColumnDefinition } from 'src/app/shared/components/table/models';
import GlobalUtils from 'src/app/utils/global-utils';
import { ItemsUtils } from 'src/app/utils/items.utils';
import { CreatureType } from 'src/be-models/interfaces/characters/creature-type.enum';
import { NPC, NPCPopulated } from 'src/be-models/interfaces/characters/npc';

This is a placeholder for preset-random-npc.component.ts
