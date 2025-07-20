import { describe, expect, it } from 'vitest';

import {
  calculateCartTotal,
  findProduct,
  formatPrice,
  groupByCategory,
  roundRating,
} from '../helpers';

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

describe('groupByCategory', () => {
  it('returns an empty array when no products are provided', () => {
    const groups = groupByCategory([]);
    expect(groups).toEqual([]);
  });

  it('return an array with an object for each category', () => {
    const groups = groupByCategory([
      { id: 1, category: 'A' },
      { id: 2, category: 'A' },
      { id: 3, category: 'B' },
    ]);
    expect(groups).toEqual([
      {
        category: 'A',
        products: [
          { id: 1, category: 'A' },
          { id: 2, category: 'A' },
        ],
      },
      { category: 'B', products: [{ id: 3, category: 'B' }] },
    ]);
  });
});

describe('findProduct', () => {
  it('returns undefined if productId not found', () => {
    expect(findProduct([{ id: 1 }], '0')).toBeUndefined();
    expect(findProduct([{ id: 1 }], '1abc')).toBeUndefined();
  });

  it('returns the product object if productId found', () => {
    expect(findProduct([{ id: 1 }], '1')).toEqual({ id: 1 });
  });

  it('works with either productId as number or string', () => {
    expect(findProduct([{ id: 2 }], '2')).toEqual({ id: 2 });
    expect(findProduct([{ id: 2 }], 2)).toEqual({ id: 2 });
  });
});

describe('calculateCartTotal', () => {
  const dummyStoreProducts = [
    { id: 1, price: 23.45 },
    { id: 2, price: 67.89 },
    { id: 3, price: 98.76 },
    { id: 4, price: 54.32 },
  ];

  it('calculates total for simple cart with multiple items', () => {
    const dummyCart = [
      { id: 1, quantity: 1 },
      { id: 2, quantity: 3 },
    ];
    const total = calculateCartTotal(dummyCart, dummyStoreProducts);
    expect(total).toBe(227.12);
  });

  it('calculates total of zero for an empty cart', () => {
    const total = calculateCartTotal([], dummyStoreProducts);
    expect(total).toBe(0);
  });
});

describe('formatPrice', () => {
  it('formats zero correctly', () => {
    expect(formatPrice(0)).toBe('$0.00');
  });

  it('formats decimal prices correctly', () => {
    expect(formatPrice(13.13)).toBe('$13.13');
  });

  it('formats integers prices correctly', () => {
    expect(formatPrice(100)).toBe('$100.00');
  });

  it('formats large numbers with comma separation', () => {
    expect(formatPrice(1234.56)).toBe('$1,234.56');
  });
});
