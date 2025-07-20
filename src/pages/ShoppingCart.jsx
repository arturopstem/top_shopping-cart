import { useOutletContext } from 'react-router';

import CartItemList from '../components/CartItemList';
import { calculateCartTotal, formatPrice } from '../utils/helpers';

function ShoppingCart() {
  const { storeProducts, cart } = useOutletContext();

  const total = calculateCartTotal(cart, storeProducts);
  const formattedTotal = formatPrice(total);

  return (
    <>
      <CartItemList cart={cart} />
      <section>
        <p>
          Total: US <output>{formattedTotal}</output>
        </p>
        <button>Checkout</button>
      </section>
    </>
  );
}

export default ShoppingCart;
