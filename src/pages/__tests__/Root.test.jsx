import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { HttpResponse, delay, http } from 'msw';
import { setupServer } from 'msw/node';
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import Root from '../Root';

vi.mock('react-router', () => {
  return { Outlet: () => <div data-testid="Outlet"></div> };
});
vi.mock('../../components/MainNavigation', () => {
  return { default: () => <div data-testid="MainNavigation"></div> };
});

const server = setupServer(
  http.get('https://fakestoreapi.com/products', () => {
    return HttpResponse.json([{ id: 1 }, { id: 2 }]);
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Root', () => {
  it('displays a loading message initially', () => {
    server.use(
      http.get('https://fakestoreapi.com/products', async () => {
        await delay('infinite');
      }),
    );
    render(<Root />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays an error message when data could not be loaded', async () => {
    server.use(
      http.get('https://fakestoreapi.com/products', () => {
        return new HttpResponse(null, { status: 404 });
      }),
    );
    render(<Root />);
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
    const errorMessage = await screen.findByText(/failed to load/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders page content when data is loaded', async () => {
    render(<Root />);
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
    const Outlet = await screen.findByTestId('Outlet');
    expect(Outlet).toBeInTheDocument();
  });

  it('renders the MainNavigation component', async () => {
    render(<Root />);
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
    const MainNavigation = await screen.findByTestId('MainNavigation');
    expect(MainNavigation).toBeInTheDocument();
  });
});
