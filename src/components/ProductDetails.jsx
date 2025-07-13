import useProductCartManagement from '../hooks/useProductCartManagement';
import ProductCartControl from './ProductCartControl';
import Rating from './Rating';

function ProductDetails({ product }) {
  const { cartItem, handleIncreaseQuantity, handleDecreaseQuantity } =
    useProductCartManagement(product.id);

  return (
    <section>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <Rating rating={product.rating.rate} />
      <p>US ${product.price}</p>
      <ProductCartControl
        cartItem={cartItem}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
      />
    </section>
  );
}

export default ProductDetails;
