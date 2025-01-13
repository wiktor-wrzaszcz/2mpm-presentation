import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription, switchMap, take } from 'rxjs';
import { GamePopulatedRegistry } from 'src/be-models/interfaces/games/game';
import { SessionActionExternalPayload } from '../action-external-payload';
import { GameDetailsSingleActionRegistryResolver } from './game-details-single-action-registry-resolver';
import { GameDetailsAction } from './game-details.actions';
import { AppService } from '../../services/app.service';
import { GameDetailsSnapshotContent } from 'src/be-models/interfaces/snapshot/game-details-snapshot.interface';
import { GamesService } from '../../api/services/games-service/games.service';

This is a placeholder for game-details-register-manager.ts
