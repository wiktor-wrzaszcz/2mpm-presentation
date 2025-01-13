import GamesRepository from "../repositories/games.repository";
import { randomUUID } from "crypto";
import ContainersRepository from "../repositories/containers.repository";
import ItemsRepository from "../repositories/items.repository";
import CharactersRepository from "../repositories/character.repository";
import GameFeedsRepository from "../repositories/game-feeds.repository";
import { Types } from "mongoose";
import { CreateGameRequest } from "../dtos/create-game-request";
import { EditGameStaticSettingsRequest } from "../dtos/edit-game-request";
import SocketIoService from "./socket-io/socket-io.service";
import { SessionActionExternalPayload } from "../models/game-base-actions";
import { CharDetailsCharRemovedRequested } from "../models/game-character-actions";
import HideoutsRepository from "../repositories/hideouts.repository";
import { AnomalySecret } from "../interfaces/games/anomaly-secret";
import VehiclesRepository from "../repositories/vehicles.repository";
import SnapshotsRepository from "../repositories/snapshots.repository";
import ActionLogsRepository from "../repositories/action-logs.repository";
import { InMemoryGameStateManager } from "./snapshots/in-memory-game-state.manager";
import { GameDetailsSnapshotContent } from "../interfaces/snapshot/game-details-snapshot.interface";
import NotesContentRepository from "../repositories/notes-content.repository";
import { adminUserId } from "../app";

This is a placeholder for games.service.ts
