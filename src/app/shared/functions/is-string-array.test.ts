import { isStringArray } from "./is-string-array";

describe('check if value is array of string', () => {
  test('returns true for an array of strings', () => {
    const value = ['a', '123', 'thg3'];
    const result = isStringArray(value);
    expect(result).toBe(true);
  });

  test('returns true for an empty array', () => {
    const value: string[] = [];
    const result = isStringArray(value);
    expect(result).toBe(true);
  });

  test('returns false for non-array value', () => {
    const value = 'sdfg';
    const result = isStringArray(value);
    expect(result).toBe(false);
  });

  test('returns false for an array with non-string values', () => {
    const value = ['sdfg', 1, {a: 1}];
    const result = isStringArray(value);
    expect(result).toBe(false);
  });
})