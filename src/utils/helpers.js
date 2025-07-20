export function roundRating(rating) {
  const wholeNumber = Math.floor(rating);
  const fractionalPart = rating - wholeNumber;

  if (fractionalPart > 0) {
    return wholeNumber + 0.5;
  }
  return wholeNumber;
}

export function groupByCategory(products) {
  const productsByCategory = Object.groupBy(
    products,
    ({ category }) => category,
  );

  const categoryProductPairs = Object.entries(productsByCategory);

  const categories = categoryProductPairs.map(([category, products]) => ({
    category,
    products,
  }));

  return categories;
}

export function findProduct(productsList, productId) {
  return productsList.find(
    (product) => product.id.toString() === productId.toString(),
  );
}

export function calculateCartTotal(cart, storeProducts) {
  const total = cart.reduce((totalAccumulator, cartItem) => {
    const product = findProduct(storeProducts, cartItem.id);

    if (!product) {
      return totalAccumulator;
    }

    const subtotal = product.price * cartItem.quantity;
    return totalAccumulator + subtotal;
  }, 0);

  return total;
}

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function formatPrice(price) {
  return priceFormatter.format(price);
}
