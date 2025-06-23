import { afterEach, describe, expect, it } from 'vitest';

import { getCart, saveCart } from '../cartStorage';

afterEach(() => localStorage.clear());

describe('cartStorage', () => {
  describe('getCart', () => {
    it('returns an empty array if no cart previously stored', () => {
      const shoppingCart = getCart();
      expect(shoppingCart).toHaveLength(0);
    });

    it('returns an array with products if cart previously stored', () => {
      localStorage.setItem(
        'shoppingCart',
        JSON.stringify([{ id: 1 }, { id: 2 }]),
      );
      const shoppingCart = getCart();
      expect(shoppingCart.length).toBeGreaterThan(0);
    });
  });

  describe('saveCart', () => {
    it('stores the cart if not previously stored', () => {
      expect(localStorage.getItem('shoppingCart')).toBeNull();
      saveCart([{ id: 3 }]);
      const storedShoppingCart = localStorage.getItem('shoppingCart');
      expect(JSON.parse(storedShoppingCart)).toEqual([{ id: 3 }]);
    });

    it('replaces previously stored cart', () => {
      localStorage.setItem('shoppingCart', JSON.stringify([{ id: 4 }]));
      expect(localStorage.getItem('shoppingCart')).not.toBeNull();
      saveCart([{ id: 5 }]);
      const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
      expect(shoppingCart).not.toEqual([{ id: 4 }]);
      expect(shoppingCart).toEqual([{ id: 5 }]);
    });
  });
});
