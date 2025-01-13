import * as express from "express";
import { Container } from "../interfaces/containers/container";
import { GamePopulated } from "../interfaces/games/game";
import BaseItem from "../interfaces/items/base-item.interface";
import APIController from "../models/api-controller";
import SocketIoService from "../services/socket-io/socket-io.service";
import AggregatedAllItemsType from "../interfaces/item-definitions/types/aggregated-all-items-type.interface";
import { BaseCreature } from "../interfaces/characters/base-creature";
import { Hideout } from "../interfaces/hideouts/hideout.interface";
import { AzureAuthInfo } from "../interfaces/auth/azure-auth.interface";
import { AutosaveHandler } from "../services/snapshots/autosave-handler";
import { AutosaveLoop } from "../services/snapshots/autosave-loop";
import { InMemoryGameStateManager } from "../services/snapshots/in-memory-game-state.manager";
import { StatePartType, StatePartTypeEnum } from "../utils/snapshots.utils";
import { env } from "process";

This is a placeholder for admin-panel.controller.ts
