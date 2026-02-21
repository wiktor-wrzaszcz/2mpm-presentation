import * as express from "express";
import APIController from "../models/api-controller";
import LootPoolsService from "../services/lootpools.service";

export default class LootPoolsController implements APIController {
  public path = "/lootpools";
  public router = express.Router();

  /** Injects the loot pools service dependency and registers all HTTP routes. */
  constructor(private lootpoolsService: LootPoolsService) {
    this.intializeRoutes();
  }

  /** Registers GET routes for retrieving all loot pools and a single loot pool by ID. */
  public intializeRoutes() {
    this.router.get(this.path, (req, res) => this.getAllLootPools(req, res));
    this.router.get(this.path + "/:lootpoolId", (req, res) =>
      this.getLootPoolsById(req, res)
    );
  }

  /** Handles GET /lootpools. Retrieves all available loot pools and sends them in the response. */
  async getAllLootPools(request: express.Request, response: express.Response) {
    const result = await this.lootpoolsService.getLootPools();
    response.send(result);
  }

  /** Handles GET /lootpools/:lootpoolId. Retrieves a single loot pool matching the provided ID and sends it in the response. */
  async getLootPoolsById(request: express.Request, response: express.Response) {
    const result = await this.lootpoolsService.getLootPoolById(
      request.params["lootpoolId"]
    );
    response.send(result);
  }
}
