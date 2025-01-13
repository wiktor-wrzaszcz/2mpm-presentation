import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NotesService } from 'src/app/core/api/services/notes-service/notes.service';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { CharactersUtils } from 'src/app/core/game/char-details/game-characters-utils';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { CharacterPopulated } from 'src/be-models/interfaces/characters/character';
import { MenuOption } from '../../popovers/context-menu-popover/context-menu-popover.component';
import { ModalAnimationsCreatorService } from '../modal-animations';
import { EditCreateNewNoteModalComponent } from './edit-create-new-note-modal/edit-create-new-note-modal.component';

This is a placeholder for notes-modal.component.ts
