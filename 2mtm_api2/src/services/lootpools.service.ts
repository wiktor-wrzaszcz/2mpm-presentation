import LootPoolsRepository from "../repositories/loot-pools.repository";
import { StaticDataStore } from "./socket-io/static-data-store";

export default class LootPoolsService {
  constructor(private lootpoolsRepo: LootPoolsRepository) {}

  /** Returns all loot pools from the in-memory static data store, avoiding redundant database reads. */
  async getLootPools() {
    return StaticDataStore.getLootPools();
  }

  /** Retrieves a single loot pool by its unique identifier from the database. */
  async getLootPoolById(lootpoolId: string) {
    const lootpools = await this.lootpoolsRepo.getLootPoolById(lootpoolId);
    return lootpools;
  }
}
