import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import ProductCard from '../ProductCard';

const dummyProduct = {
  title: 'Fake Product',
  price: 34.56,
  image: 'https://example.com/fake_product_image.jpg',
  rating: { rate: 7.8 },
};

vi.mock('../Rating', () => {
  return { default: () => <div data-testid="Rating"></div> };
});

describe('ProductCard', () => {
  it('renders a card', () => {
    const { container } = render(<ProductCard product={dummyProduct} />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it('renders the image', () => {
    render(<ProductCard product={dummyProduct} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<ProductCard product={dummyProduct} />);
    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent('Fake Product');
  });

  it('renders the price', () => {
    render(<ProductCard product={dummyProduct} />);
    const price = screen.getByText(/34\.56/);
    expect(price).toBeInTheDocument();
  });

  it('renders the rating', () => {
    render(<ProductCard product={dummyProduct} />);
    const rating = screen.getByTestId('Rating');
    expect(rating).toBeInTheDocument();
  });
});
