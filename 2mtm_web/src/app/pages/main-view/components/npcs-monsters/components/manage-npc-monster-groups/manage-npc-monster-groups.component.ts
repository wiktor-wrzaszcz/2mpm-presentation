import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { CharactersRegisterStore } from 'src/app/core/game/char-details/game-characters-register.store';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ModalAnimationsCreatorService } from 'src/app/shared/modals/modal-animations';
import { MonsterPopulated } from 'src/be-models/interfaces/characters/monster';
import { NPCPopulated } from 'src/be-models/interfaces/characters/npc';
import { EditCreateNewGroupModalComponent } from './components/create-new-group-modal/edit-create-new-group-modal.component';
import { ManageNpcMonsterGroupsManagerService } from './manage-npc-monster-groups-manager.service';

This is a placeholder for manage-npc-monster-groups.component.ts
