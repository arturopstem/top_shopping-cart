import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import CategoryProducts from '../CategoryProducts';

vi.mock('react-router', () => {
  return { Link: ({ to, children }) => <a href={to}>{children}</a> };
});
vi.mock('../ProductCard.jsx', () => {
  return { default: () => <div data-testid="ProductCard">product</div> };
});

describe('CategoryProducts', () => {
  it('renders the category title', () => {
    render(<CategoryProducts title="electronics" products={[]} />);
    const title = screen.getByRole('heading', { name: 'electronics' });
    expect(title).toBeInTheDocument();
  });

  it('renders a link for each product', () => {
    render(
      <CategoryProducts
        title="electronics"
        products={[{ id: 1 }, { id: 2 }]}
      />,
    );
    const links = screen.queryAllByRole('link');
    expect(links).toHaveLength(2);
  });

  it('renders a ProductCard for each product', () => {
    render(
      <CategoryProducts
        title="electronics"
        products={[{ id: 1 }, { id: 2 }]}
      />,
    );
    const productCards = screen.queryAllByTestId('ProductCard');
    expect(productCards).toHaveLength(2);
  });
});
