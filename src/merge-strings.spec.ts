import { mergeStrings } from '../src/merge-strings';

describe('merge strings', () => {
  it('should yield merged string', () => {
    expect(mergeStrings('abc', 'def')).toBe('abcdef');
  });
});
