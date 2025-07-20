import { useOutletContext } from 'react-router';

import useProductCartManagement from '../hooks/useProductCartManagement';
import { findProduct } from '../utils/helpers';
import CartItemQuantity from './CartItemQuantity';

function CartItem({ cartItem }) {
  const { storeProducts } = useOutletContext();
  const { handleSetQuantity, handleIncreaseQuantity, handleDecreaseQuantity } =
    useProductCartManagement(cartItem.id);
  const product = findProduct(storeProducts, cartItem.id);

  return (
    <article>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>US ${product.price}</p>
      <CartItemQuantity
        cartItem={cartItem}
        handleSetQuantity={handleSetQuantity}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
      />
    </article>
  );
}

export default CartItem;
