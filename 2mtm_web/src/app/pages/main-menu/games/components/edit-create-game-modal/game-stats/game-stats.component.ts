import { Component, OnInit } from '@angular/core';
import { combineLatest, filter, map, startWith, Subscription } from 'rxjs';
import { GameStatsService } from 'src/app/core/game-stats-service/game-stats.service';
import { CharactersRegisterStore } from 'src/app/core/game/char-details/game-characters-register.store';
import { ContainersRegisterStore } from 'src/app/core/game/containers/game-containers-register.store';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { HideoutsRegisterManagerStore } from 'src/app/core/game/hideouts/hideouts-registry-manager';
import { ItemsRegisterStore } from 'src/app/core/game/items/game-items-register.store';
import { VehiclesRegisterManagerStore } from 'src/app/core/game/vehicles/vehicles-registry-manager';
import { GameStatistics } from 'src/be-models/interfaces/games/game-statistics.interface';
import { environment } from 'src/environments/environment';

This is a placeholder for game-stats.component.ts
