import { AnyBulkWriteOperation, ObjectId } from "mongodb";
import { AbilityExchangeCombination } from "../enums/ability-exchange-combination";
import { Attributes } from "../interfaces/characters/attributes";
import { GameModel } from "../mongoose/schemas/games/game.schema";
import { ObjectUtils } from "../utils/object.utils";
import { NoteWithoutContent } from "../interfaces/notes/note";
import Condition from "../interfaces/conditions/condition";
import { CreatureType } from "../interfaces/characters/creature-type.enum";
import { NPCPopulated } from "../interfaces/characters/npc";
import ConsumableItemType from "../interfaces/item-definitions/types/consumable-type.interface";
import { BaseCreatureModel } from "../mongoose/schemas/characters/base-creature.schema";
import { CharacterModel } from "../mongoose/schemas/characters/character.schema";
import { CreatureMergedModel } from "../mongoose/schemas/characters/creature-merged.schema";
import { MonsterModel } from "../mongoose/schemas/characters/monster.schema";
import { NPCModel } from "../mongoose/schemas/characters/npc.schema";
import { SchemaUtils } from "../mongoose/schemas/utils.schema";
import { adminUserId } from "../app";

This is a placeholder for character.repository.ts
