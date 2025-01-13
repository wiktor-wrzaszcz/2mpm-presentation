import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { LoggedUserName } from 'src/app/core/api/services/auth-service/auth.service';
import { CharacterService } from 'src/app/core/api/services/character-service/character.service';
import { MonsterDefinitionsStoreService } from 'src/app/core/api/stores/monster-definitions.store';
import { AppService } from 'src/app/core/services/app.service';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { ColumnDefinition } from 'src/app/shared/components/table/models';
import GlobalUtils from 'src/app/utils/global-utils';
import { CreateMonsterRequest } from 'src/be-models/dtos/create-character-request';
import { CreatureType } from 'src/be-models/interfaces/characters/creature-type.enum';
import { MonsterDefinitionPopulated } from 'src/be-models/interfaces/monster-definitions/monster-definition';
import { MonsterPresetPreviewComponent } from './monster-preset-preview/monster-preset-preview.component';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { CharactersRegisterStore } from 'src/app/core/game/char-details/game-characters-register.store';
import { CharDetailsCharCreationRequested } from 'src/app/core/game/char-details/game-character-actions';
import { ModalAnimationsCreatorService } from 'src/app/shared/modals/modal-animations';

This is a placeholder for preset-monster.component.ts
