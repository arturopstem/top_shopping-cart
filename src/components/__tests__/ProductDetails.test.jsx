import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import ProductDetails from '../ProductDetails';

vi.mock('../../hooks/useProductCartManagement', () => {
  return { default: () => ({}) };
});

vi.mock('../Rating', () => {
  return {
    default: ({ rating }) => <div aria-label={`Rating: ${rating}`}></div>,
  };
});

vi.mock('../ProductCartControl', () => {
  return { default: () => <div data-testid="ProductCartControl"></div> };
});

const testProduct = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};

describe('ProductDetails', () => {
  it('renders the product image', () => {
    render(<ProductDetails product={testProduct} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image?.src).toBe(testProduct.image);
  });

  it('renders the product title', () => {
    render(<ProductDetails product={testProduct} />);
    const title = screen.getByText(testProduct.title);
    expect(title).toBeInTheDocument();
  });

  it('renders the product description', () => {
    render(<ProductDetails product={testProduct} />);
    const description = screen.getByText(testProduct.description);
    expect(description).toBeInTheDocument();
  });

  it('renders the product rating as stars and value', () => {
    render(<ProductDetails product={testProduct} />);
    const expectedAriaLabel = `Rating: ${testProduct.rating.rate}`;
    const rating = screen.getByLabelText(expectedAriaLabel);
    expect(rating).toBeInTheDocument();
  });

  it('renders the product price', () => {
    render(<ProductDetails product={testProduct} />);
    const expectedText = `US $${testProduct.price}`;
    const price = screen.queryByText(expectedText);
    expect(price).toBeInTheDocument();
  });

  it('renders ProductCartControl', () => {
    render(<ProductDetails product={testProduct} />);
    const productCartControl = screen.queryByTestId('ProductCartControl');
    expect(productCartControl).toBeInTheDocument();
  });
});
