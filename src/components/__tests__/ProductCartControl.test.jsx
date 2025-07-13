import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import ProductCartControl from '../ProductCartControl';

describe('ProductCartControl', () => {
  it('renders Add to Cart button if there is no cartItem', () => {
    render(<ProductCartControl cartItem={undefined} />);
    expect(
      screen.getByRole('button', { name: /Add to Cart/i }),
    ).toBeInTheDocument();
  });

  it('renders the quantity of the product in cart', () => {
    render(<ProductCartControl cartItem={{ id: 4, quantity: 2 }} />);
    expect(screen.getByText(/Added \(2\)/i)).toBeInTheDocument();
  });

  it('renders minus and plus buttons to adjust the quantity', () => {
    render(<ProductCartControl cartItem={{ id: 4, quantity: 2 }} />);
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
  });

  it('calls handleIncreaseQuantity when Add to Cart is clicked', async () => {
    const user = userEvent.setup();
    const handleIncreaseQuantity = vi.fn();
    render(
      <ProductCartControl
        cartItem={undefined}
        handleIncreaseQuantity={handleIncreaseQuantity}
      />,
    );
    await user.click(screen.getByRole('button', { name: /Add to Cart/i }));
    expect(handleIncreaseQuantity).toHaveBeenCalled();
  });

  it('calls handleIncreaseQuantity when the plus button is clicked', async () => {
    const user = userEvent.setup();
    const handleIncreaseQuantity = vi.fn();
    render(
      <ProductCartControl
        cartItem={{ id: 4, quantity: 2 }}
        handleIncreaseQuantity={handleIncreaseQuantity}
      />,
    );
    await user.click(screen.getByRole('button', { name: '+' }));
    expect(handleIncreaseQuantity).toHaveBeenCalled();
  });

  it('calls handleDecreaseQuantity when the minus button is clicked', async () => {
    const user = userEvent.setup();
    const handleDecreaseQuantity = vi.fn();
    render(
      <ProductCartControl
        cartItem={{ id: 4, quantity: 2 }}
        handleDecreaseQuantity={handleDecreaseQuantity}
      />,
    );
    await user.click(screen.getByRole('button', { name: '-' }));
    expect(handleDecreaseQuantity).toHaveBeenCalled();
  });
});
