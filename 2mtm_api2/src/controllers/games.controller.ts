import * as express from "express";
import AuthSession from "../interfaces/auth/auth-session.interface";
import APIController from "../models/api-controller";
import GamesService from "../services/games.service";
import { AzureAuthInfo } from "../interfaces/auth/azure-auth.interface";
import { GamePopulatedRegistry, GameRole } from "../interfaces/games/game";
import { InMemoryGameStateManager } from "../services/snapshots/in-memory-game-state.manager";
import { isValidObjectId } from "mongoose";

This is a placeholder for games.controller.ts
