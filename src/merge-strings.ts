/**
 * Merge two strings as alternating characters.
 *
 * @export
 * @param {string} left
 * @param {string} right
 * @returns {string}
 */
export function mergeStrings(left: string, right: string): string {
  // Verify that both values are string
  if (typeof left !== 'string' || typeof right !== 'string') {
    throw new Error(
      `Argument 
        ${typeof left !== 'string' ? '(left)' : ''} 
        ${typeof right !== 'string' ? '(right)' : ''} 
        should be type of string`
    );
  }

  // Calculate which side is longer, this will be used to decide which source we use as base and which source we will append at the end
  const isLeftLonger: boolean = left.length > right.length;

  // Get the remaining characters from the longest source string
  const postMergeAppendValue = isLeftLonger
    ? left.substring(right.length)
    : right.substring(left.length);

  // Based on the shortest source length merge strings
  const mergedString =
    [...Array(isLeftLonger ? right.length : left.length).keys()].reduce(
      (previousValue, currentValue, currentIndex) => {
        // Append source values left first right second
        return (previousValue += left[currentIndex] + right[currentIndex]);
      },
      ''
    ) +
    // append longest source remaining characters
    postMergeAppendValue;

  return mergedString;
}
