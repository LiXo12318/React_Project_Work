const API_URL = "https://jsonplaceholder.typicode.com/users";

// Додано метод для оновлення користувача в UsersService
export class UsersService {
  static async fetchUsers() {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch users");
    return response.json();
  };

  static async fetchUserById(id) {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch user with ID: ${id}`);
    return response.json();
  };

  // Додано метод для видалення користувача
  static async deleteUser(id) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error(`Failed to delete user with ID: ${id}`);
  }

  // Додано метод для оновлення користувача
  static async updateUser(id, updatedUser) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });
    if (!response.ok) throw new Error(`Failed to update user with ID: ${id}`);
    return response.json();
  }
}
