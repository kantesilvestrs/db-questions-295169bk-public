// Benchmarks: https://jsben.ch/3239w

/**
 * Returns number of distinct pairs matching target value.
 *
 * @export
 * @param {Array<number>} items - Array of numbers used for finding distinct pairs
 * @param {number} target - Target value distinct pairs must sum to
 * @returns {number}
 */
export function distinctPairs(items: Array<number>, target: number): number {
  // Count how many distinct pairs have been found
  let distinctPairCounter: number = 0;

  // Store matched values for lookup
  const matchedValues: Array<undefined> = [];

  // Store items length (standard practice from C# where accessing object property is more expensive than accessing primitive value)
  const itemCount = items.length;

  for (let i = 0; i < itemCount; i++) {
    for (let x = 0; x < itemCount; x++) {
      // If one of the values has been matched or it's the same value, skip iteration
      if (x === i || items[i] in matchedValues || items[x] in matchedValues) {
        continue;
      }

      // If two values match the target value update distinctPair counter and add those values to the matched value lookup table
      if (items[i] + items[x] === target) {
        distinctPairCounter++;
        matchedValues[items[i]] = undefined;
        matchedValues[items[x]] = undefined;
      }
    }
  }

  return distinctPairCounter;
}
