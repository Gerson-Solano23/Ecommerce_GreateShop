import { useEffect, useState } from 'react';
import { response } from '../interface/response';
  function useProducts() {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/Product/List`;
  const [result, setResult] = useState<response>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  let Response: response;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const json = await response.json();
        Response = json;
        console.log("Response", Response);
        setResult(Response);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [URL]);

  return {
    loading,
    result,
    error
  };
}

export default useProducts;