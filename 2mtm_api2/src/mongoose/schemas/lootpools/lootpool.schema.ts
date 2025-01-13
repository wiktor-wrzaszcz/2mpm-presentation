import mongoose from "mongoose";
import LootPool from "../../../interfaces/lootpools/lootpool.interface";
import { mongooseLeanId } from "../../lean-with-id";
import { LootPoolRecordSchema } from "./lootpool-record.schema";

export interface ILootPool
  extends Omit<LootPool, "id">,
    mongoose.Document<any> {}

export const LootPoolSchema = new mongoose.Schema<ILootPool>({
  _id: String,
  records: [LootPoolRecordSchema],
});

LootPoolSchema.plugin(mongooseLeanId);

export const LootPoolModel = mongoose.model<ILootPool>(
  "LootPool",
  LootPoolSchema,
  "lootpools"
);
