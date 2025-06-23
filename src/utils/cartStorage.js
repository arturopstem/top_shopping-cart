const CART_STORAGE_KEY = 'shoppingCart';

export function getCart() {
  const serializedCart = localStorage.getItem(CART_STORAGE_KEY);

  if (serializedCart === null) {
    return [];
  }

  return JSON.parse(serializedCart);
}

export function saveCart(cart) {
  const serializedCart = JSON.stringify(cart);

  localStorage.setItem(CART_STORAGE_KEY, serializedCart);
}
