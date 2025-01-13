import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { combineLatest, Subscription, take } from 'rxjs';
import { AuthService } from 'src/app/core/api/services/auth-service/auth.service';
import { OnlineSessionService } from 'src/app/core/api/services/online-session-service/online-session.service';
import { AbilitiesStoreService } from 'src/app/core/api/stores/abilities.store';
import { BackgroundStoreService } from 'src/app/core/api/stores/backgrounds.store';
import { ConditionsStoreService } from 'src/app/core/api/stores/conditions.store';
import { FacilityDefinitionsStoreService } from 'src/app/core/api/stores/facility-definitions.store';
import { ItemDefinitionsStoreService } from 'src/app/core/api/stores/item-definitions.store';
import { LootPoolStoreService } from 'src/app/core/api/stores/lootpools.store';
import { ModStoreService } from 'src/app/core/api/stores/mods.store';
import { MonsterDefinitionsStoreService } from 'src/app/core/api/stores/monster-definitions.store';
import { NpcLootPoolStoreService } from 'src/app/core/api/stores/npc-lootpools.store';
import { TraitStoreService } from 'src/app/core/api/stores/traits.store';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { ScreenSizeService } from 'src/app/core/screen-size-service/screen-size.service';
import { ModalAnimationsCreatorService } from 'src/app/shared/modals/modal-animations';
import { ResourcesComponent } from 'src/app/shared/modals/resources/resources.component';
import { GameRole } from 'src/be-models/interfaces/games/game';

This is a placeholder for vert-menu.component.ts
