import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/products.service';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return { products, error, loading };
};

export default useProducts;
