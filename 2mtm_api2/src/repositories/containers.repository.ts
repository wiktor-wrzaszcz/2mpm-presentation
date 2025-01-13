import { ObjectId } from "mongodb";
import mongoose, { isValidObjectId } from "mongoose";
import { CreateContainerRequest } from "../dtos/create-container-request";
import { Container } from "../interfaces/containers/container";
import { ContainerModel } from "../mongoose/schemas/containers/container.schema";
import { GameModel } from "../mongoose/schemas/games/game.schema";
import { ObjectUtils } from "../utils/object.utils";
import { adminUserId } from "../app";

This is a placeholder for containers.repository.ts
