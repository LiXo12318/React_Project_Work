// src/pages/Orders/OrderForm.jsx
import React, { useState } from 'react';

const OrderForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      name,
      address,
      phone,
      email,
    };

    onSubmit(orderData);  // Викликаємо функцію для обробки замовлення
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <div>
        <label htmlFor="name">Ім'я:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="address">Адреса доставки:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="phone">Телефон:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Електронна пошта:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <button type="submit">Оформити замовлення</button>
    </form>
  );
};

export default OrderForm;
