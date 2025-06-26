import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import MainNavigation from '../MainNavigation';

vi.mock('react-router', () => {
  return { Link: ({ to, children }) => <a href={to}>{children}</a> };
});

describe('MainNavigation', () => {
  it('renders the page main navigation', () => {
    render(<MainNavigation />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it("renders a link to the store's home page", () => {
    render(<MainNavigation />);
    const homeLink = screen.getByRole('link', { name: /top ?store/i });
    expect(homeLink).toBeInTheDocument();
  });

  it('renders a link to the shopping cart page', () => {
    render(<MainNavigation />);
    const shoppingCartLink = screen.getByRole('link', { name: /cart/i });
    expect(shoppingCartLink).toBeInTheDocument();
  });
});
