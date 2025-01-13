import { ObjectId } from "mongodb";
import ContainersRepository from "../../../repositories/containers.repository";
import SocketIoService from "../socket-io.service";
import { Container } from "../../../interfaces/containers/container";
import { SessionActionExternalPayload } from "../../../models/game-base-actions";
import { ContainersAddAction } from "../../../models/game-containers-actions";
import { randomUUID } from "crypto";
import { FacilityInstance } from "../../../interfaces/hideouts/facility-instance.interface";
import { Vehicle } from "../../../interfaces/vehicles/vehicle.interface";
import { NPCDwellerPayload } from "../../../models/game-hideouts-actions";
import VehiclesRepository from "../../../repositories/vehicles.repository";
import VehiclesService from "../../vehicles.service";

This is a placeholder for session-vehicles.service.ts
