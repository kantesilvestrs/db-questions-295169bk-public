import { distinctPairs } from '../src/distinct-pairs';

describe('distinct pairs', () => {
  it('should return a number of distinct pairs that sum up to target value', () => {
    const values1 = [1, 3, 46, 1, 3, 9];
    expect(distinctPairs(values1, 47)).toBe(1);

    const values2 = [1, 2, 3, 6, 7, 8, 9, 1];
    expect(distinctPairs(values2, 10)).toBe(3);

    const values3 = [-23, 46, 0, 15, 23, -1, 24, 9, 3, 3, 12, 11];
    expect(distinctPairs(values3, 23)).toBe(4);

    const values4 = [11, 11, 11, 11, 11, 11, 11, 11];
    expect(distinctPairs(values4, 22)).toBe(1);

    const values5 = [0, 1, 0, 1, 0, 1, 0, 1, -1, 0];
    expect(distinctPairs(values5, 0)).toBe(2);
  });
});
