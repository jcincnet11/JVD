import { describe, it, expect } from 'vitest';
import en from '../src/messages/en.json';
import es from '../src/messages/es.json';

function getKeys(obj: Record<string, unknown>, prefix = ''): string[] {
  const keys: string[] = [];
  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const value = obj[key];
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...getKeys(value as Record<string, unknown>, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys.sort();
}

describe('Translation key coverage', () => {
  const enKeys = getKeys(en);
  const esKeys = getKeys(es);

  it('en.json and es.json have the same keys', () => {
    expect(enKeys).toEqual(esKeys);
  });

  it('en.json has no empty string values', () => {
    const emptyKeys = enKeys.filter((key) => {
      const value = key
        .split('.')
        .reduce((obj: unknown, k) => (obj as Record<string, unknown>)[k], en);
      return value === '';
    });
    expect(emptyKeys).toEqual([]);
  });

  it('es.json has no empty string values', () => {
    const emptyKeys = esKeys.filter((key) => {
      const value = key
        .split('.')
        .reduce((obj: unknown, k) => (obj as Record<string, unknown>)[k], es);
      return value === '';
    });
    expect(emptyKeys).toEqual([]);
  });

  it('missing in es.json', () => {
    const missing = enKeys.filter((key) => !esKeys.includes(key));
    expect(missing).toEqual([]);
  });

  it('extra in es.json (not in en.json)', () => {
    const extra = esKeys.filter((key) => !enKeys.includes(key));
    expect(extra).toEqual([]);
  });
});
