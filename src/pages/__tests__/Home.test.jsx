import { render, screen } from '@testing-library/react';
import { useOutletContext } from 'react-router';
import { describe, expect, it, vi } from 'vitest';

import Home from '../Home';

vi.mock('react-router');
vi.mock('../../components/CategoryProducts', () => {
  return {
    default: ({ title }) => (
      <div data-testid="CategoryProducts">
        <h2>{title}</h2>
      </div>
    ),
  };
});

describe('Home', () => {
  it('renders a feedback message when no products are provided in context', () => {
    vi.mocked(useOutletContext).mockReturnValue({ storeProducts: [] });
    render(<Home />);
    const feedbackMessage = screen.getByText(
      /The store has no products listed/i,
      { selector: 'p' },
    );
    expect(feedbackMessage).toBeInTheDocument();
  });

  it('renders CategoryProducts component for each category', () => {
    vi.mocked(useOutletContext).mockReturnValue({
      storeProducts: [
        { id: 1, category: 'A' },
        { id: 2, category: 'A' },
        { id: 3, category: 'B' },
      ],
    });
    render(<Home />);
    const categories = screen.getAllByTestId('CategoryProducts');
    expect(categories).toHaveLength(2);
    const categoryA = screen.getByRole('heading', { name: 'A' });
    expect(categoryA).toBeInTheDocument();
    const categoryB = screen.getByRole('heading', { name: 'B' });
    expect(categoryB).toBeInTheDocument();
  });
});
