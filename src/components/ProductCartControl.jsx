function ProductCartControl({
  cartItem,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) {
  if (!cartItem) {
    return (
      <div>
        <button onClick={handleIncreaseQuantity}>Add to Cart</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleDecreaseQuantity}>-</button>
      <span>Added ({cartItem.quantity})</span>
      <button onClick={handleIncreaseQuantity}>+</button>
    </div>
  );
}

export default ProductCartControl;
