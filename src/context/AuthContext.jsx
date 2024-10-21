import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]); // Масив зареєстрованих користувачів
  const navigate = useNavigate();

  const register = (email, password) => {
    const userExists = registeredUsers.find(user => user.email === email);

    if (userExists) {
      throw new Error('User already exists');
    }

    // Додаємо нового користувача
    const newUser = { email, password };
    setRegisteredUsers(prev => [...prev, newUser]);

    setUser({ email, isAdmin: false });
  };

  const login = (email, password) => {
    const existingUser = registeredUsers.find(user => user.email === email && user.password === password);

    if (existingUser) {
      setUser({ email, isAdmin: existingUser.email === "admin@example.com" });
      navigate('/');
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, registeredUsers }}>
      {children}
    </AuthContext.Provider>
  );
};
