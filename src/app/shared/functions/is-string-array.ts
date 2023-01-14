export function isStringArray(value: unknown): boolean {
  return Array.isArray(value) && value.every(val => typeof val === 'string');
}