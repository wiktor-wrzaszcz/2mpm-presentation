import { randomUUID } from "crypto";
import { CreateContainerRequest } from "../dtos/create-container-request";
import { Container } from "../interfaces/containers/container";
import { SessionActionExternalPayload } from "../models/game-base-actions";
import { ContainersAddAction } from "../models/game-containers-actions";
import ContainersRepository from "../repositories/containers.repository";
import SocketIoService from "./socket-io/socket-io.service";
import { InMemoryGameStateManager } from "./snapshots/in-memory-game-state.manager";

This is a placeholder for containers.service.ts
