import { Container } from "../../interfaces/containers/container";
import BaseItem from "../../interfaces/items/base-item.interface";
import { ContainersActionResolver } from "./containers/containers-action-resolver";
import { ItemsActionResolver } from "./items/items-action-resolver";
import SessionContainersService from "./containers/session-containers.service";
import SessionItemsService from "./items/session-items.service";
import { InMemoryGameStateManager } from "../snapshots/in-memory-game-state.manager";
import { ContainersUtils } from "../../utils/containers.utils";
import { ModifiedDateChecker } from "./modified-date-checker";

This is a placeholder for games-items-container-registry-manager.ts
