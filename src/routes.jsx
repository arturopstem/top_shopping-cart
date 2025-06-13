import { Navigate } from 'react-router';

import Home from './pages/Home';
import Product from './pages/Product';
import Root from './pages/Root';
import ShoppingCart from './pages/ShoppingCart';

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Navigate to="/" />,
      },
      {
        path: 'products/:id',
        element: <Product />,
      },
      {
        path: 'shoppingcart',
        element: <ShoppingCart />,
      },
    ],
  },
];

export default routes;
