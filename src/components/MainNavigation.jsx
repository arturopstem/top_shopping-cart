import { Link } from 'react-router';

import ShoppingCart from './icons/ShoppingCart';

function MainNavigation(props) {
  return (
    <nav {...props}>
      <ul>
        <li>
          <Link to="/">TOP Store</Link>
        </li>
        <li>
          <Link to="/shoppingcart">
            <ShoppingCart /> Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
