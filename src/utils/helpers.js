export function roundRating(rating) {
  const wholeNumber = Math.floor(rating);
  const fractionalPart = rating - wholeNumber;

  if (fractionalPart > 0) {
    return wholeNumber + 0.5;
  }
  return wholeNumber;
}
