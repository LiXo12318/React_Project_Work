// pages/ProductPage/Products.jsx
import React from 'react';
import { useProducts } from '../../context/ProductContext';
import ProductCard from '../ProductPage/ProductCard';
import './Products.css';

const Products = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-container">
      <h1 className="product-title">Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
