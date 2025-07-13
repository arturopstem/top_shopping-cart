import { render, screen } from '@testing-library/react';
import { useOutletContext, useParams } from 'react-router';
import { describe, expect, it, vi } from 'vitest';

import { findProduct } from '../../utils/helpers';
import Product from '../Product';

vi.mock('react-router');
vi.mock('../../utils/helpers');
vi.mock('../../components/ProductDetails', () => {
  return { default: () => <div data-testid="ProductDetails"></div> };
});

describe('Product', () => {
  it('renders a feedback message if product ID not found', () => {
    vi.mocked(useParams).mockReturnValue({ id: '0' });
    vi.mocked(useOutletContext).mockReturnValue({ storeProducts: [] });
    vi.mocked(findProduct).mockReturnValue(undefined);
    render(<Product />);
    expect(screen.getByText(/product not found/i)).toBeInTheDocument();
  });

  it('renders ProductDetails if product found', () => {
    vi.mocked(useParams).mockReturnValue({ id: '0' });
    vi.mocked(useOutletContext).mockReturnValue({ storeProducts: [{ id: 0 }] });
    vi.mocked(findProduct).mockReturnValue({ id: 0 });
    render(<Product />);
    expect(screen.getByTestId('ProductDetails')).toBeInTheDocument();
  });
});
