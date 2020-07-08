// Benchmarks: https://jsben.ch/fsJbh

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

  // Store potential pairs
  const potentialPairs: Array<number> = [];

  // Store items length (standard practice from C# where accessing object property is more expensive than accessing primitive value)
  const itemCount = items.length;

  for (let i = 0; i < itemCount; i++) {
    // Set current iterration number
    const currentNumber = items[i];

    // Skip iterration if the current number already exists in matched values
    if (currentNumber in matchedValues) {
      continue;
    }

    // Get the potential paired value for the current iterration number
    const potentialPairedValue = target - currentNumber;

    // If we current iterration number to a potential pair insert both values into matched values and increment counter
    if (potentialPairs[potentialPairedValue] === currentNumber) {
      matchedValues[currentNumber] = undefined;
      matchedValues[potentialPairs[currentNumber]] = undefined;
      distinctPairCounter++;
    }
    // Otherwise we create a new potential pair
    // Skipping condition check as it would slow down performance on diverse set of numbers
    else {
      potentialPairs[currentNumber] = potentialPairedValue;
    }
  }

  return distinctPairCounter;
}
