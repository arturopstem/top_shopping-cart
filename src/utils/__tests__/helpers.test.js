import { describe, expect, it } from 'vitest';

import { roundRating } from '../helpers';

describe('roundRating', () => {
  it('returns 0 for rating 0', () => {
    expect(roundRating(0)).toBe(0);
  });

  it('returns 3 for rating 3', () => {
    expect(roundRating(3)).toBe(3);
  });

  it('returns 5 for rating 5', () => {
    expect(roundRating(5)).toBe(5);
  });

  it('returns 1.5 for rating 1.1', () => {
    expect(roundRating(1.1)).toBe(1.5);
  });

  it('returns 2.5 for rating 2.4', () => {
    expect(roundRating(2.4)).toBe(2.5);
  });

  it('returns 3.5 for rating 3.7', () => {
    expect(roundRating(3.7)).toBe(3.5);
  });
});
