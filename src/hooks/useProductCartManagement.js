import { useOutletContext } from 'react-router';

import { saveCart } from '../utils/cartStorage';
import { findProduct } from '../utils/helpers';

function useProductCartManagement(productId) {
  const { cart, setCart } = useOutletContext();

  const cartItem = findProduct(cart, productId);

  const handleIncreaseQuantity = () => {
    setCart((prevCart) => {
      const currentItemIncart = findProduct(prevCart, productId);
      let nextCart;

      if (!currentItemIncart) {
        const newCartItem = { id: productId, quantity: 1 };
        nextCart = [...prevCart, newCartItem];
      } else {
        const updatedCartItem = {
          ...currentItemIncart,
          quantity: currentItemIncart.quantity + 1,
        };
        nextCart = prevCart.map((item) =>
          item.id === productId ? updatedCartItem : item,
        );
      }

      saveCart(nextCart);
      return nextCart;
    });
  };

  const handleDecreaseQuantity = () => {
    setCart((prevCart) => {
      const currentItemIncart = findProduct(prevCart, productId);

      if (!currentItemIncart) {
        return prevCart;
      }

      const updatedCartItem = {
        ...currentItemIncart,
        quantity: currentItemIncart.quantity - 1,
      };

      const nextCart = prevCart
        .map((item) => (item.id === productId ? updatedCartItem : item))
        .filter((item) => item.quantity > 0);

      saveCart(nextCart);
      return nextCart;
    });
  };

  return {
    cartItem,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  };
}

export default useProductCartManagement;
