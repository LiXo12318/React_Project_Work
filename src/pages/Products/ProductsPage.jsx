import React from 'react';
import { useProducts } from '../../context/ProductContext';
import ProductList from './components/ProductList';
import LoadingOrError from './components/LoadingOrError';
import "../Products/components/Products.css";

const ProductsPage = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className="product-page-container">
      <LoadingOrError loading={loading} error={error} />
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
