import React from 'react';

const FilterOptions = ({ setFilterOption }) => {
  return (
    <div>
      <label>
        Category:
        <select onChange={(e) => setFilterOption(e.target.value)} defaultValue="">
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </label>
    </div>
  );
};

export default FilterOptions;
