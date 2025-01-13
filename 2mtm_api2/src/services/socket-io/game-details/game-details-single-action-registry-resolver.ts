import { UUID } from "bson";
import { Socket } from "socket.io";
import { GamePopulated } from "../../../interfaces/games/game";
import { SessionActionExternalPayload } from "../../../models/game-base-actions";
import { Monster } from "../../../interfaces/characters/monster";
import { NPC } from "../../../interfaces/characters/npc";
import { StaticDataStore } from "../static-data-store";
import { ItemCreator } from "../item-creator";
import { HideoutDayPassedResolver } from "./hideout-day-passed.resolver";
import { ItemsAction } from "../../../models/game-items-actions";
import { CreatureType } from "../../../interfaces/characters/creature-type.enum";
import { GameDetailsSnapshotContent } from "../../../interfaces/snapshot/game-details-snapshot.interface";
import SocketIoService from "../socket-io.service";

This is a placeholder for game-details-single-action-registry-resolver.ts
