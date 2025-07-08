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
