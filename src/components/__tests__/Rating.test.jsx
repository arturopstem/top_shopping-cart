import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Rating from '../Rating';

vi.mock('../RatingStars', () => {
  return { default: () => <div data-testid="RatingStars"></div> };
});

describe('Rating', () => {
  it('renders RatingStars', () => {
    render(<Rating rating={3.7} />);
    const RatingStars = screen.getByTestId('RatingStars');
    expect(RatingStars).toBeInTheDocument();
  });

  it('renders the rating', () => {
    render(<Rating rating={4.2} />);
    const rating = screen.getByText(/4\.2/);
    expect(rating).toBeInTheDocument();
  });
});
