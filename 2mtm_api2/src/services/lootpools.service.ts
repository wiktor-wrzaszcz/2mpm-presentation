import LootPoolsRepository from "../repositories/loot-pools.repository";
import { StaticDataStore } from "./socket-io/static-data-store";

export default class LootPoolsService {
  constructor(private lootpoolsRepo: LootPoolsRepository) {}

  async getLootPools() {
    return StaticDataStore.getLootPools();
  }

  async getLootPoolById(lootpoolId: string) {
    const lootpools = await this.lootpoolsRepo.getLootPoolById(lootpoolId);
    return lootpools;
  }
}
