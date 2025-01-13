import { ObjectId } from "mongodb";
import { FacilityInstance } from "../../../interfaces/hideouts/facility-instance.interface";
import { Hideout } from "../../../interfaces/hideouts/hideout.interface";
import HideoutsRepository from "../../../repositories/hideouts.repository";
import HideoutsService from "../../hideouts.service";
import ContainersRepository from "../../../repositories/containers.repository";
import SocketIoService from "../socket-io.service";
import { Container } from "../../../interfaces/containers/container";
import { SessionActionExternalPayload } from "../../../models/game-base-actions";
import { ContainersAddAction } from "../../../models/game-containers-actions";
import { randomUUID } from "crypto";

This is a placeholder for session-hideouts.service.ts
