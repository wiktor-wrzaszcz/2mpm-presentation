import { randomUUID } from "crypto";
import { UUID } from "bson";
import { Socket } from "socket.io";
import { AbilityExchangeCombination } from "../../../enums/ability-exchange-combination";
import { Attributes } from "../../../interfaces/characters/attributes";
import ConsumableItemType from "../../../interfaces/item-definitions/types/consumable-type.interface";
import { SessionActionExternalPayload } from "../../../models/game-base-actions";
import { CharactersUtils } from "../../../utils/characters.utils";
import { GameCharactersRegisterUtils } from "../game-characters-utils";
import { NoteWithoutContent } from "../../../interfaces/notes/note";
import Condition from "../../../interfaces/conditions/condition";
import { BaseCreature } from "../../../interfaces/characters/base-creature";
import { NPC } from "../../../interfaces/characters/npc";
import GlobalUtils from "../../../utils/global-utils";
import SocketIoService from "../socket-io.service";
import { Container } from "../../../interfaces/containers/container";
import { BaseItemUnpopulated } from "../../../interfaces/items/base-item.interface";
import { CreatePlayerCharacterRequest } from "../../../dtos/create-character-request";
import { Character } from "../../../interfaces/characters/character";

This is a placeholder for character-single-action-registry-resolver.ts
