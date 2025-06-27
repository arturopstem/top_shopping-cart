import { useOutletContext } from 'react-router';

import CategoryProducts from '../components/CategoryProducts';
import { groupByCategory } from '../utils/helpers';

function Home() {
  const { storeProducts } = useOutletContext();
  const categories = groupByCategory(storeProducts);

  if (categories.length === 0) {
    return <p>The store has no products listed</p>;
  }

  return (
    <div>
      {categories.map(({ category, products }) => (
        <CategoryProducts key={category} title={category} products={products} />
      ))}
    </div>
  );
}

export default Home;
