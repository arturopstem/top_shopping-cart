import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import RatingStars from '../RatingStars';

vi.mock('../icons/Star', () => {
  return { default: () => <div data-testid="Star"></div> };
});
vi.mock('../icons/StarHalf', () => {
  return { default: () => <div data-testid="StarHalf"></div> };
});
vi.mock('../icons/StarOutline', () => {
  return { default: () => <div data-testid="StarOutline"></div> };
});

describe('RatingStars', () => {
  it('renders 5 star outline for rating 0', () => {
    render(<RatingStars rating={0} />);
    const allStar = screen.queryAllByTestId('Star');
    const allStarHalf = screen.queryAllByTestId('StarHalf');
    const allStarOutline = screen.queryAllByTestId('StarOutline');
    expect(allStar).toHaveLength(0);
    expect(allStarHalf).toHaveLength(0);
    expect(allStarOutline).toHaveLength(5);
  });

  it('renders 5 star for rating 5', () => {
    render(<RatingStars rating={5} />);
    const allStar = screen.queryAllByTestId('Star');
    const allStarHalf = screen.queryAllByTestId('StarHalf');
    const allStarOutline = screen.queryAllByTestId('StarOutline');
    expect(allStar).toHaveLength(5);
    expect(allStarHalf).toHaveLength(0);
    expect(allStarOutline).toHaveLength(0);
  });

  it('renders 0.5 star for rating 0.7', () => {
    render(<RatingStars rating={0.7} />);
    const allStar = screen.queryAllByTestId('Star');
    const allStarHalf = screen.queryAllByTestId('StarHalf');
    const allStarOutline = screen.queryAllByTestId('StarOutline');
    expect(allStar).toHaveLength(0);
    expect(allStarHalf).toHaveLength(1);
    expect(allStarOutline).toHaveLength(4);
  });

  it('renders 2.5 star for rating 2.2', () => {
    render(<RatingStars rating={2.2} />);
    const allStar = screen.queryAllByTestId('Star');
    const allStarHalf = screen.queryAllByTestId('StarHalf');
    const allStarOutline = screen.queryAllByTestId('StarOutline');
    expect(allStar).toHaveLength(2);
    expect(allStarHalf).toHaveLength(1);
    expect(allStarOutline).toHaveLength(2);
  });

  it('renders 3.5 star for rating 3.5', () => {
    render(<RatingStars rating={3.5} />);
    const allStar = screen.queryAllByTestId('Star');
    const allStarHalf = screen.queryAllByTestId('StarHalf');
    const allStarOutline = screen.queryAllByTestId('StarOutline');
    expect(allStar).toHaveLength(3);
    expect(allStarHalf).toHaveLength(1);
    expect(allStarOutline).toHaveLength(1);
  });

  it('renders 4.5 star for rating 4.8', () => {
    render(<RatingStars rating={4.8} />);
    const allStar = screen.queryAllByTestId('Star');
    const allStarHalf = screen.queryAllByTestId('StarHalf');
    const allStarOutline = screen.queryAllByTestId('StarOutline');
    expect(allStar).toHaveLength(4);
    expect(allStarHalf).toHaveLength(1);
    expect(allStarOutline).toHaveLength(0);
  });
});
