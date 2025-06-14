import { Outlet } from 'react-router';

import useFetch from '../hooks/useFetch';

const fakeStoreAPI = 'https://fakestoreapi.com/products';

function Root() {
  const { data, error, loading } = useFetch(fakeStoreAPI);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops! Failed to load the products</p>;
  }

  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default Root;
