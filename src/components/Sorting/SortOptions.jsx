import React from 'react';

const SortOptions = ({ setSortOption }) => {
  return (
    <select onChange={(e) => setSortOption(e.target.value)} defaultValue="">
      <option value="">Sort By</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="name-asc">Name: A to Z</option>
      <option value="name-desc">Name: Z to A</option>
    </select>
  );
};

export default SortOptions;
