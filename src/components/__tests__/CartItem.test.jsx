import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import CartItem from '../CartItem';

const dummyProduct = {
  id: 12,
  title: 'Fake Product',
  price: 34.56,
  image: 'https://example.com/fake_product_image.jpg',
};

vi.mock('react-router', () => {
  return { useOutletContext: () => ({ storeProducts: [dummyProduct] }) };
});

vi.mock('../CartItemQuantity', () => {
  return { default: () => <div data-testid="CartItemQuantity"></div> };
});

vi.mock('../../hooks/useProductCartManagement', () => {
  return { default: () => ({ cart: [] }) };
});

describe('CartItem', () => {
  it("renders the product's image", () => {
    render(<CartItem cartItem={{ id: 12, quantity: 42 }} />);
    expect(screen.getByRole('img').src).toBe(dummyProduct.image);
  });

  it("renders the product's title", () => {
    render(<CartItem cartItem={{ id: 12, quantity: 42 }} />);
    expect(screen.getByRole('heading')).toHaveTextContent(dummyProduct.title);
  });

  it("renders the product's price", () => {
    render(<CartItem cartItem={{ id: 12, quantity: 42 }} />);
    const expectedText = `US $${dummyProduct.price}`;
    expect(screen.getByText(expectedText)).toHaveTextContent(expectedText);
  });

  it('renders the CartItemQuantity component', () => {
    render(<CartItem cartItem={{ id: 12, quantity: 42 }} />);
    expect(screen.getByTestId('CartItemQuantity')).toBeInTheDocument();
  });
});
