import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import ToDoPage from '../pages/ToDoPage/ToDoPage';
import UserPage from '../pages/Users/UserPage';
import Layout from '../components/Layout/Layout';
import Products from '../pages/ProductPage/Products';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
};

const BasicRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<PrivateRoute element={<Layout />} />}>
        <Route index element={<Home />} />
        <Route path="todo" element={<ToDoPage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default BasicRouter;
