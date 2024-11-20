// src/pages/Products/ProductsPage.jsx
import React, { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import ProductList from './components/ProductList';
import LoadingOrError from './components/LoadingOrError';
import SortOptions from '../../components/Sorting/SortOptions';
import FilterOptions from '../../components/Filtering/FilterOptions';
import useSort from '../Products/hooks/useSort';
import useFilter from '../Products/hooks/useFilter';
import usePagination from '../Products/hooks/usePagination';
import "../Products/components/Products.css";

const ProductsPage = () => {
  const { products, loading, error } = useProducts();
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");
  
  const itemsPerPage = 10; // Кількість товарів на сторінку
  const { currentPage, paginate, nextPage, prevPage } = usePagination(itemsPerPage);
  
  const filteredProducts = useFilter(products, filterOption);
  const sortedProducts = useSort(filteredProducts, sortOption);
  const paginatedProducts = paginate(sortedProducts); 

  return (
    <div className="product-page-container">
      <LoadingOrError loading={loading} error={error} />
      <SortOptions setSortOption={setSortOption} />
      <FilterOptions setFilterOption={setFilterOption} />
      <ProductList products={paginatedProducts} />
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={nextPage} disabled={paginatedProducts.length < itemsPerPage}>Next</button>
      </div>
    </div>
  );
};

export default ProductsPage;
