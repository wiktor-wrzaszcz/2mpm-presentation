import { ObjectId } from "mongodb";
import { isValidObjectId } from "mongoose";
import { CreateItemRequest } from "../dtos/create-item-request";
import { AttachmentsSlot } from "../interfaces/item-definitions/enums/attachment-slot.enum";
import { ItemActionExternalPayload } from "../models/game-items-actions";
import { GameModel } from "../mongoose/schemas/games/game.schema";
import { ItemFullTreeModel } from "../mongoose/schemas/items/item-full-tree.schema";
import { ItemModel } from "../mongoose/schemas/items/item.schema";
import { ItemUnpopulatedModel } from "../mongoose/schemas/items/item-plain.schema";
import { adminUserId } from "../app";

This is a placeholder for items.repository.ts
