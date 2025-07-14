import { Link } from 'react-router';

import ShoppingCart from './icons/ShoppingCart';

function MainNavigation({ cart, restProps }) {
  return (
    <nav {...restProps}>
      <ul>
        <li>
          <Link to="/">TOP Store</Link>
        </li>
        <li>
          <Link to="/shoppingcart">
            <ShoppingCart />
            {cart && <span>{cart.length}</span>}
            <span>Cart</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
