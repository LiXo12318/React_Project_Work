import { useEffect, useState } from 'react';
import { UsersService } from '../services/users.service';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await UsersService.fetchUsers();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await UsersService.deleteUser(id);
      setUsers(users.filter(user => user.id !== id)); // Оновлюємо список після видалення
    } catch (error) {
      setError(error.message);
    }
  };

  return { users, error, loading, handleDeleteUser };
};

export default useUsers;
