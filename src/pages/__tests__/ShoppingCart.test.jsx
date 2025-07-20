import { render, screen } from '@testing-library/react';
import { useOutletContext } from 'react-router';
import { describe, expect, it, vi } from 'vitest';

import ShoppingCart from '../ShoppingCart';

vi.mock('../../components/CartItemList', () => {
  return { default: () => <div data-testid="CartItemList"></div> };
});

vi.mock('react-router');

describe('ShoppingCart', () => {
  it('renders the CartItemList', () => {
    vi.mocked(useOutletContext).mockReturnValue({
      storeProducts: [],
      cart: [],
    });
    render(<ShoppingCart />);
    expect(screen.getByTestId('CartItemList')).toBeInTheDocument();
  });

  it('renders the total amount to pay', () => {
    vi.mocked(useOutletContext).mockReturnValue({
      storeProducts: [
        { id: 1, price: 23.45 },
        { id: 2, price: 67.89 },
      ],
      cart: [],
    });
    render(<ShoppingCart />);
    const expectedTotal = '$0.00';
    expect(
      screen.getByText(expectedTotal, { selector: 'output' }),
    ).toBeInTheDocument();
  });
});
