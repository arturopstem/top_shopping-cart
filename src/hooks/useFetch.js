import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
      } catch (error) {
        if (error.name === 'AbortError') {
          return;
        }
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
