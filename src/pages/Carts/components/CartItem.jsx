// src/pages/Cart/components/CartItem.jsx
import React from "react";
import './CartItem.css'; // Імпортуємо стилі

const CartItem = ({ item }) => {
  const { id, title, price, image } = item; 

  return (
    <div className="cart-item" key={id}>
      <div className="cart-item-image">
        <img src={image} alt={title} />
      </div>
      <div className="cart-item-info">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default CartItem;
