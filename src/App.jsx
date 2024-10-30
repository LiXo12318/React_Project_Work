import './App.css';
import BasicRouter from './routes/BasicRouter';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext'; 
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <BasicRouter />
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
