// src/pages/Products/components/ProductCard.jsx
import React, { useState, useContext } from 'react';
import { CartContext } from '../../Carts/context/CartContext';  // Імпортуємо CartContext
import './Products.css';

const ProductCard = ({ product }) => {
  const { id, image, title, description, price } = product;
  const { addToCart, cartItems } = useContext(CartContext);  // Отримуємо функцію для додавання товару і кошик

  // Локальний стан для відображення повідомлення
  const [added, setAdded] = useState(false);

  // Обробник для додавання товару в кошик
  const handleAddToCart = () => {
    addToCart(product);  // Додаємо товар до кошика
    setAdded(true);  // Показуємо повідомлення про додавання товару

    // Скидаємо повідомлення через 2 секунди
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  // Перевірка, чи товар вже в кошику
  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <div className="product-card" key={id}>
      <div className="image-wrapper">
        <img className="product-image" src={image} alt={title} />
      </div>
      <div className="product-info">
        <h2 className="product-name">{title}</h2>
        <p className="product-description">
          {description.length > 50 ? `${description.slice(0, 100)}...` : description}
        </p>
        <div className="product-footer">
          <span className="product-price">${price}</span>

          {/* Кнопка "Додати до кошика" */}
          <button 
            className="add-to-cart-btn" 
            onClick={handleAddToCart}  
            disabled={isInCart}  // Деактивуємо кнопку, якщо товар вже в кошику
          >
            {isInCart ? "Вже в кошику" : "Додати до кошика"}
          </button>

          {/* Повідомлення про додавання товару */}
          {added && !isInCart && <p className="added-message">Товар додано до кошика!</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
