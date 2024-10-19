import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import ToDoPage from '../pages/ToDoPage/ToDoPage';
import UserPage from '../pages/Users/UserPage';
import Layout from '../components/Layout/Layout';
import { Products } from '../pages/ProductPage/Products';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';

const BasicRouter = () => {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="todo" element={<ToDoPage />} />
      <Route path="users" element={<UserPage />} />
      <Route path="products" element={<Products />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
</BrowserRouter>

  );
}

export default BasicRouter;
