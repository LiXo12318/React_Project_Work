import './App.css';
import BasicRouter from './routes/BasicRouter';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './pages/Carts/context/CartContext'; 
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <BasicRouter />
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
