import CartItem from './CartItem';

function CartItemList({ cart }) {
  if (cart.length <= 0) {
    return (
      <section>
        <p>No products in the cart</p>
      </section>
    );
  }

  return (
    <section>
      {cart.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
    </section>
  );
}

export default CartItemList;
