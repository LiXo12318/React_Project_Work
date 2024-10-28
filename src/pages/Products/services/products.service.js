const API_URL = "https://fakestoreapi.com/products";

export class ProductsService {
  // Отримати всі продукти
    static  fetchProducts = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  };

  // Отримання за ID
   static fetchProductById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch product with ID: ${id}`);
    return response.json();
  };

  static async fetchCategories() {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) throw new Error("Failed to fetch categories");
    return response.json();
  };

}
