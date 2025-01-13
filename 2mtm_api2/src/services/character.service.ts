import { randomUUID } from "crypto";
import { Container } from "../interfaces/containers/container";
import { BaseItemUnpopulated } from "../interfaces/items/base-item.interface";
import { SessionActionExternalPayload } from "../models/game-base-actions";
import { CharDetailsCharCreatedAction } from "../models/game-character-actions";
import CharacterRepository from "../repositories/character.repository";
import ContainersRepository from "../repositories/containers.repository";
import GamesRepository from "../repositories/games.repository";
import ItemsRepository from "../repositories/items.repository";
import SocketIoService from "./socket-io/socket-io.service";
import { GameDetailsNpcMonsterGroupChangedAction } from "../models/game-details.actions";
import { NPC } from "../interfaces/characters/npc";
import { Monster } from "../interfaces/characters/monster";
import { ContainersAddAction } from "../models/game-containers-actions";
import { ItemsAddAction } from "../models/game-items-actions";
import { InMemoryGameStateManager } from "./snapshots/in-memory-game-state.manager";

This is a placeholder for character.service.ts
