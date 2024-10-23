import React from 'react';
import './Products.css';

const ProductCard = ({ product }) => {
  const { id, image, title, description, price } = product;

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
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
