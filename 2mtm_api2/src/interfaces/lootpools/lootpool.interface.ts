export default interface LootPool {
  id: string;
  records: LootPoolRecord[];
}

export interface LootPoolRecord {
  targetId: string;
  targetType: LootPoolRecordType;
  lootPoolId: string;
  Q0?: number;
  Q1?: number;
  Q2?: number;
  Q3?: number;
  Q4?: number;
  Q5?: number;
  // can be in "xdy" format, f.ex. 1d6
  quantity?: string;
  additionalData?: any;
  internal?: boolean;
}

export enum LootPoolRecordType {
  Item = "item",
  Mod = "mod",
  LootPool = "lootPool",
  Liquid = "liquid",
}
