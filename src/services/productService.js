const API_URL = 'https://fakestoreapi.com/products';

// Отримати всі продукти
export const fetchProducts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};

// Отримання за ID
export const fetchProductById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch product with ID: ${id}`);
  return response.json();
};
