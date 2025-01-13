import mongoose from "mongoose";
import {
  LootPoolRecordType,
  LootPoolRecord,
} from "../../../interfaces/lootpools/lootpool.interface";
import { mongooseLeanId } from "../../lean-with-id";

export interface ILootPoolRecord
  extends Omit<LootPoolRecord, "id">,
    mongoose.Document<any> {}

export const LootPoolRecordSchema = new mongoose.Schema<ILootPoolRecord>(
  {
    targetId: String,
    targetType: { type: String, enum: LootPoolRecordType },
    lootPoolId: String,
    Q0: Number,
    Q1: Number,
    Q2: Number,
    Q3: Number,
    Q4: Number,
    Q5: Number,
    quantity: String,
    additionalData: Object,
    internal: Boolean,
  },
  { _id: false }
);

LootPoolRecordSchema.plugin(mongooseLeanId);
