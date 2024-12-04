import React, { useContext, useState } from 'react';
import { CartContext } from '../Carts/context/CartContext';  
import OrderForm from '../Orders/OrderForm';
import './OrderPage.css';

const OrderPage = () => {
  const { cartItems } = useContext(CartContext);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Обробка оформлення замовлення
  const handleOrderSubmit = (orderData) => {
    console.log('Order submitted:', orderData);
    setOrderConfirmed(true);
  };

  return (
    <div className="order-page-container">
      {cartItems.length === 0 ? (
        <h2>Ваш кошик порожній</h2>
      ) : (
        <>
          <h2>Оформлення замовлення</h2>
          <div className="order-summary">
            <h3>Ваші товари</h3>
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  <span>{item.title}</span> - ${item.price}
                </li>
              ))}
            </ul>
            <h3>Разом: ${cartItems.reduce((total, item) => total + item.price, 0)}</h3>
          </div>
          <OrderForm onSubmit={handleOrderSubmit} />
          {orderConfirmed && <p>Ваше замовлення підтверджено! Дякуємо за покупку.</p>}
        </>
      )}
    </div>
  );
};

export default OrderPage;
