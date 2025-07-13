import { useOutletContext, useParams } from 'react-router';

import ProductDetails from '../components/ProductDetails';
import { findProduct } from '../utils/helpers';

function Product() {
  const { id } = useParams();
  const { storeProducts } = useOutletContext();
  const product = findProduct(storeProducts, id);

  if (!product) {
    return (
      <>
        <section>
          <p>Product not found</p>
        </section>
      </>
    );
  }

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}

export default Product;
