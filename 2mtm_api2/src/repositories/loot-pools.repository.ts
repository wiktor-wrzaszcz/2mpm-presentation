import mongoose, { Model } from "mongoose";
import LootPool, {
  LootPoolRecord,
} from "../interfaces/lootpools/lootpool.interface";
import { LootPoolModel } from "../mongoose/schemas/lootpools/lootpool.schema";
import GlobalUtils from "../utils/global-utils";
import {
  StaticDataStore,
  StaticDataTypeEnum,
} from "../services/socket-io/static-data-store";

export default class LootPoolsRepository {
  /** Fetches all loot pool documents from the database as plain JavaScript objects. */
  async getLootPools() {
    return (await LootPoolModel.find({}).lean()) as LootPool[];
  }

  /** Fetches a single loot pool document by its unique ID. */
  async getLootPoolById(id: string) {
    return await LootPoolModel.findById(id);
  }

  // Only for API calls (f.ex. for CSV file), never to be used in app
  /** Groups the provided raw loot pool records by their pool ID, constructs pool objects, and persists them. */
  async createLootPools(lootpools: LootPoolRecord[]) {
    const lootPoolObjects: LootPool[] = [];
    const groupedLootPools = GlobalUtils.groupBy<string, LootPoolRecord>(
      lootpools,
      (x) => x.lootPoolId
    );

    for (const [lootPoolId, lootPoolRecords] of groupedLootPools) {
      lootPoolObjects.push({ id: lootPoolId, records: lootPoolRecords });
    }
    return await this.resolveAndCreateNewLootPool(lootPoolObjects);
  }

  /** Iterates over the provided loot pool objects, upserts each one in the database, then invalidates the static data cache. */
  private async resolveAndCreateNewLootPool(lootpools: any[]) {
    const results = [];
    // TODO: consider "reduce"
    for (const lootpool of lootpools) {
      results.push(
        await this.executeNewDefinitionCreation<LootPool>(
          LootPoolModel,
          lootpool as LootPool
        )
      );
    }

    StaticDataStore.flushData(StaticDataTypeEnum.LootPools);

    return results;
  }

  /**
   * Upserts a single loot pool document using the item's ID as the database key.
   * Throws a descriptive error if the operation fails.
   */
  private async executeNewDefinitionCreation<T extends LootPool>(
    model: Model<Omit<T, "id"> & mongoose.Document>,
    newItem: T
  ) {
    try {
      const itemWithId = newItem as any as Partial<T> & { _id: any };
      itemWithId._id = itemWithId.id;
      const { _id, id, ...itemData } = itemWithId;

      return await model.replaceOne({ _id: itemWithId._id }, itemData, {
        upsert: true,
        new: true,
      });
    } catch (error: any) {
      throw new Error("couldn't create new lootpool, reason: " + error.message);
    }
  }
}
