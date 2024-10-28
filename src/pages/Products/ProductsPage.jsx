import React, { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import ProductList from './components/ProductList';
import LoadingOrError from './components/LoadingOrError';
import SortOptions from '../../components/Sorting/SortOptions';
import FilterOptions from '../../components/Filtering/FilterOptions';
import useSort from '../Products/hooks/useSort';
import useFilter from '../Products/hooks/useFilter';
import "../Products/components/Products.css";

const ProductsPage = () => {
  const { products, loading, error } = useProducts();
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");

  const filteredProducts = useFilter(products, filterOption);
  const sortedProducts = useSort(filteredProducts, sortOption);

  return (
    <div className="product-page-container">
      <LoadingOrError loading={loading} error={error} />
      <SortOptions setSortOption={setSortOption} />
      <FilterOptions setFilterOption={setFilterOption} />
      <ProductList products={sortedProducts} />
    </div>
  );
};

export default ProductsPage;
