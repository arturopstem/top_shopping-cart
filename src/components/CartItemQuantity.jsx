import { useEffect, useState } from 'react';

function CartItemQuantity({
  cartItem,
  handleSetQuantity,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) {
  const [quantity, setQuantity] = useState(
    () => cartItem?.quantity.toString() || '',
  );

  useEffect(() => {
    setQuantity(cartItem?.quantity.toString() || '');
  }, [cartItem]);

  const handleInputChange = (e) => {
    const value = Number.parseInt(e.target.value);

    if (Number.isNaN(value)) {
      setQuantity(e.target.value);
      return;
    }

    setQuantity(value.toString());
    handleSetQuantity(value);
  };

  return (
    <div>
      <button onClick={handleDecreaseQuantity}>-</button>
      <input
        type="number"
        aria-label="item quantity"
        value={quantity}
        onChange={handleInputChange}
      />
      <button onClick={handleIncreaseQuantity}>+</button>
    </div>
  );
}

export default CartItemQuantity;
