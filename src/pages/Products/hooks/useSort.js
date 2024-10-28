import { useMemo } from 'react';

const useSort = (products, sortOption) => {
  const sortedProducts = useMemo(() => {
    if (!sortOption) return products;

    return [...products].sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "name-asc") return a.title.localeCompare(b.title);
      if (sortOption === "name-desc") return b.title.localeCompare(a.title);
      return 0;
    });
  }, [products, sortOption]);

  return sortedProducts;
};

export default useSort;
