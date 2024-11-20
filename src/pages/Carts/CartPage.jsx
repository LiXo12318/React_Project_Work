// src/pages/Carts/CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../Carts/context/CartContext';
import CartSummary from './components/CartSummary';
import CartItem from './components/CartItem'; // Імпортуємо CartItem

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Функція для обчислення загальної суми
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>
      <h1>Кошик</h1>
      {cartItems.length === 0 ? (
        <p>Ваш кошик порожній. Додайте товари, щоб побачити їх тут.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <CartItem item={item} /> {/* Використовуємо компонент CartItem */}
                <button onClick={() => removeFromCart(item.id)}>Видалити</button>
              </li>
            ))}
          </ul>
          <CartSummary totalPrice={getTotalPrice()} cartItems={cartItems} />
        </div>
      )}
    </div>
  );
};

export default CartPage;
