import * as express from "express";
import APIController from "../models/api-controller";
import LootPoolsService from "../services/lootpools.service";

export default class LootPoolsController implements APIController {
  public path = "/lootpools";
  public router = express.Router();

  constructor(private lootpoolsService: LootPoolsService) {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, (req, res) => this.getAllLootPools(req, res));
    this.router.get(this.path + "/:lootpoolId", (req, res) =>
      this.getLootPoolsById(req, res)
    );
  }

  async getAllLootPools(request: express.Request, response: express.Response) {
    const result = await this.lootpoolsService.getLootPools();
    response.send(result);
  }

  async getLootPoolsById(request: express.Request, response: express.Response) {
    const result = await this.lootpoolsService.getLootPoolById(
      request.params["lootpoolId"]
    );
    response.send(result);
  }
}
