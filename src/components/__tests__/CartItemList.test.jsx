import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import CartItemList from '../CartItemList';

vi.mock('../CartItem', () => {
  return { default: () => <div data-testid="CartItem"></div> };
});

describe('CartItemList', () => {
  it('renders a feedback message if there are no items in cart', () => {
    render(<CartItemList cart={[]} />);
    expect(screen.getByText(/no products in the cart/i)).toBeInTheDocument();
  });

  it('renders a CartItem for each item in cart', () => {
    render(<CartItemList cart={[{ id: 1 }, { id: 2 }]} />);
    expect(screen.getAllByTestId('CartItem')).toHaveLength(2);
  });
});
