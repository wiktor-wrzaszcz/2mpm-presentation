export class LootPoolsResolversUtils {
  static resolveQuantity(quantityRaw: string): number {
    const [times, maxValue] = quantityRaw.split('d');
    if (!maxValue) {
      return Number(times);
    }
    let acc = 0;
    for (let index = 0; index < Number(times); index++) {
      acc += Math.ceil(Math.random() * Number(maxValue));
    }
    return acc;
  }
}
