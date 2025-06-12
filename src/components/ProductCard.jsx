import Rating from './Rating';

function ProductCard({ product, ...restProps }) {
  return (
    <article {...restProps}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>US ${product.price}</p>
      <Rating rating={product.rating.rate} />
    </article>
  );
}

export default ProductCard;
