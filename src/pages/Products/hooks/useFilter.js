import { useMemo } from 'react';

const useFilter = (products, filterOption) => {
  const filteredProducts = useMemo(() => {
    if (!filterOption) return products;

    return products.filter((product) =>
      product.category === filterOption
    );
  }, [products, filterOption]);

  return filteredProducts;
};

export default useFilter;
