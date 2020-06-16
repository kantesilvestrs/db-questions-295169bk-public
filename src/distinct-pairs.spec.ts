import { distinctPairs } from '../src/distinct-pairs';

describe('distinct pairs', () => {
  it('should return a number of distinct pairs that sum up to target value', () => {
    const values = [1, 3, 46, 1, 3, 9];
    expect(distinctPairs(values, 47)).toBe(1);
  });
});
