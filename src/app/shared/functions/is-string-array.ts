export function isStringArray(value: string[] | [] | null | string): value is string[] {
  return Array.isArray(value) && value.every(val => typeof val === 'string');
}