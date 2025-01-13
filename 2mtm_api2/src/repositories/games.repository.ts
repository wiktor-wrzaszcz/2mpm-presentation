import { ObjectID } from "bson";
import { Types, Query } from "mongoose";
import { Game } from "../interfaces/games/game";
import { PlayerSlot } from "../interfaces/games/player-slot";
import { GameModel, IGame } from "../mongoose/schemas/games/game.schema";
import { SchemaUtils } from "../mongoose/schemas/utils.schema";
import { CreateGameRequest } from "../dtos/create-game-request";
import { EditGameStaticSettingsRequest } from "../dtos/edit-game-request";
import { AnomalySecret } from "../interfaces/games/anomaly-secret";
import { adminUserId } from "../app";

This is a placeholder for games.repository.ts
