import { useState } from 'react';
import { Outlet } from 'react-router';

import MainNavigation from '../components/MainNavigation';
import useFetch from '../hooks/useFetch';
import { getCart } from '../utils/cartStorage';

const fakeStoreAPI = 'https://fakestoreapi.com/products';

function Root() {
  const { data: storeProducts, error, loading } = useFetch(fakeStoreAPI);
  const [cart, setCart] = useState(() => getCart());

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops! Failed to load the products</p>;
  }

  return (
    <>
      <header>
        <MainNavigation />
      </header>
      <main>
        <Outlet context={{ storeProducts, cart, setCart }} />
      </main>
      <footer></footer>
    </>
  );
}

export default Root;
