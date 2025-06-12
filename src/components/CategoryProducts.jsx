import { Link } from 'react-router';

import ProductCard from './ProductCard';

function CategoryProducts({ title, products, ...restProps }) {
  return (
    <section {...restProps}>
      <h2>{title}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CategoryProducts;
