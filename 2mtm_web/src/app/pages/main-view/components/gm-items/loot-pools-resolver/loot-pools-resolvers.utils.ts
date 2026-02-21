export class LootPoolsResolversUtils {
  /**
   * Parses a dice-notation quantity string (e.g. "2d6") and returns the total rolled value.
   * If the string contains no dice notation, it is treated as a fixed number and returned directly.
   * Each die is rolled independently using Math.random and results are summed.
   */
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
