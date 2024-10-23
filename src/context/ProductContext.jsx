import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';

const ProductContext = createContext();

// Хук для використання контексту в компонентах
export const useProducts = () => useContext(ProductContext);

// Провайдер контексту
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Завантаження продуктів при ініціалізації
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  // Значення, що передаються провайдером
  const value = { products, loading, error };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
