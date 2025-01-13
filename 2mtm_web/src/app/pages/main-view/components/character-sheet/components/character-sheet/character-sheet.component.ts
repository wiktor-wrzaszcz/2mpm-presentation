import { Component, Input, OnInit, Optional } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/core/services/app.service';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { MainMenuService } from 'src/app/pages/main-menu/main-menu.service';
import { AbilityType } from 'src/be-models/interfaces/abilities/ability.interface';
import { CreaturePopulated } from 'src/be-models/interfaces/characters/base-creature';
import { CreatureType } from 'src/be-models/interfaces/characters/creature-type.enum';
import { CreateNewCharacterManagerService } from '../../../create-new-character/create-new-character-manager.service';

This is a placeholder for character-sheet.component.ts
