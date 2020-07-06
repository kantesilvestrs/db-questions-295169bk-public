import { mergeStrings } from '../src/merge-strings';

describe('merge strings', () => {
  it('should yield merged string', () => {
    expect(mergeStrings('abc', 'def')).toBe('adbecf');
  });

  it('should merge strings with different lengths', () => {
    expect(mergeStrings('abcdef', 'ghi')).toBe('agbhcidef');
    expect(mergeStrings('0123', '456789')).toBe('0415263789');
  });

  it('should error out when one of the parameters is not a string', () => {
    expect(() => mergeStrings(1 as any, '234')).toThrow();
    expect(() => mergeStrings('234', null as any)).toThrow();
  });
});
