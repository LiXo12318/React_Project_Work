// src/pages/Cart/hooks/useCart.js
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

const useCart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  
  // Функція для обчислення загальної суми
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Функція для додавання товару до кошика
  const handleAddToCart = (product) => {
    addToCart(product); // Викликає метод контексту для додавання товару
  };

  // Функція для видалення товару з кошика
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return {
    cartItems,
    getTotalPrice,
    handleAddToCart,
    handleRemoveFromCart,
  };
};

export default useCart;
