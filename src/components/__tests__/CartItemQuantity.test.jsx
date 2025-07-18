import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import CartItemQuantity from '../CartItemQuantity';

const getInput = () =>
  screen.getByLabelText(/item quantity/i, {
    selector: 'input',
  });

describe('CartItemQuantity', () => {
  it('renders minus, plus buttons and a number input field', () => {
    render(<CartItemQuantity />);
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
    expect(getInput()).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
  });

  it('renders current item quantity as initial input value', () => {
    render(<CartItemQuantity cartItem={{ id: 1, quantity: 42 }} />);
    const input = getInput();
    expect(input).toHaveValue(42);
  });

  it('calls handleIncreaseQuantity when plus button is clicked', async () => {
    const user = userEvent.setup();
    const handleIncreaseQuantity = vi.fn();
    render(
      <CartItemQuantity handleIncreaseQuantity={handleIncreaseQuantity} />,
    );
    await user.click(screen.getByRole('button', { name: '+' }));
    expect(handleIncreaseQuantity).toHaveBeenCalled();
  });

  it('calls handleDecreaseQuantity when minus button is clicked', async () => {
    const user = userEvent.setup();
    const handleDecreaseQuantity = vi.fn();
    render(
      <CartItemQuantity handleDecreaseQuantity={handleDecreaseQuantity} />,
    );
    await user.click(screen.getByRole('button', { name: '-' }));
    expect(handleDecreaseQuantity).toHaveBeenCalled();
  });

  it('calls handleSetQuantity when the input value changes', async () => {
    const user = userEvent.setup();
    const handleSetQuantity = vi.fn();
    render(<CartItemQuantity handleSetQuantity={handleSetQuantity} />);
    await user.type(getInput(), '42');
    expect(handleSetQuantity).toHaveBeenCalledWith(42);
  });
});
