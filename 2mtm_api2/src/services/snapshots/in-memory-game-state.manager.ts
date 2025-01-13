import { ActionLog } from "../../interfaces/action-logs/action-log.interface";
import { ActionLogsRecord } from "../../interfaces/action-logs/action-logs-record.interface";
import { GameStatistics } from "../../interfaces/games/game-statistics.interface";
import { CharactersSnapshot } from "../../interfaces/snapshot/characters-snapshot.interface";
import { ContainersSnapshot } from "../../interfaces/snapshot/containers-snapshot.interface";
import { HideoutsSnapshot } from "../../interfaces/snapshot/hideouts-snapshot.interface";
import { GameState } from "../../interfaces/snapshot/snapshot.interface";
import { VehiclesSnapshot } from "../../interfaces/snapshot/vehicles-snapshot.interface";
import ActionLogsRepository from "../../repositories/action-logs.repository";
import SnapshotsService from "../snapshots.service";
import { GameItemsUtils } from "../socket-io/items/game-items-utils";
import { StaticDataStore } from "../socket-io/static-data-store";
import { ActionLogsSaveHandler } from "./actions-logs-save-handler";
import { AutosaveLoop } from "./autosave-loop";

This is a placeholder for in-memory-game-state.manager.ts
