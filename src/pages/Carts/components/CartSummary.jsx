// src/pages/Cart/components/CartSummary.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Імпортуємо useNavigate
import './CartSummary.css'; // Імпортуємо CSS файл

const CartSummary = ({ totalPrice, cartItems }) => {
  const navigate = useNavigate();

  // Обробник для переходу на сторінку оформлення замовлення
  const handleOrderClick = () => {
    // Передаємо інформацію про кошик в якості стану при навігації
    navigate("/order", { state: { cartItems, totalPrice } });
  };

  return (
    <div className="cart-summary">
      <h2>Загальна сума: ${totalPrice}</h2>
      <button className="order-button" onClick={handleOrderClick}>
        Оформити замовлення
      </button>
    </div>
  );
};

export default CartSummary;
