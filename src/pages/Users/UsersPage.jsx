import React, { useState, useEffect } from 'react';
import useUsers from '../Users/hooks/useUsers';
import UserList from './components/UserList';
import LoadingOrError from './components/LoadingOrError';
import { UsersService } from '../Users/services/users.service';
import "../Users/components/Users.css";

const UsersPage = () => {
  const { users, loading, error, handleDeleteUser } = useUsers();
  const [editingUser, setEditingUser] = useState(null); // Стейт для редагування
  const [updatedUsers, setUpdatedUsers] = useState([]); // Стейт для оновлених користувачів

  // Оновлюємо список користувачів, коли він завантажений
  useEffect(() => {
    if (users) {
      setUpdatedUsers(users); // Оновлюємо updatedUsers після завантаження
    }
  }, [users]);

  // Функція для відкриття форми редагування
  const handleEdit = (id) => {
    const userToEdit = updatedUsers.find((user) => user.id === id);
    setEditingUser({ ...userToEdit }); // Створюємо новий об'єкт для редагування
  };

  // Функція для збереження змін користувача
  const handleSave = async (editedUser) => {
    try {
      const updatedUser = await UsersService.updateUser(editedUser.id, editedUser);
      
      // Оновлення користувача в списку після успішного збереження
      const updatedUsersList = updatedUsers.map(user =>
        user.id === updatedUser.id ? updatedUser : user
      );

      // Оновлення стану користувачів
      setUpdatedUsers(updatedUsersList);
      setEditingUser(null);
      console.log('User updated:', updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Функція для скасування редагування
  const handleCancel = () => {
    setEditingUser(null); // Скидаємо редагування
  };

  return (
    <div className="user-page-container">
      <LoadingOrError loading={loading} error={error} />
      
      {/* Форма редагування */}
      {editingUser && (
        <div className="edit-form">
          <h2>Edit User</h2>
          <label>Name:</label>
          <input
            type="text"
            value={editingUser.name}
            onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
          />
          <label>Email:</label>
          <input
            type="email"
            value={editingUser.email}
            onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
          />
          <label>Phone:</label>
          <input
            type="text"
            value={editingUser.phone}
            onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })}
          />
          <button onClick={() => handleSave(editingUser)}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}

      <UserList users={updatedUsers} onEdit={handleEdit} onDelete={handleDeleteUser} />
    </div>
  );
};

export default UsersPage;
