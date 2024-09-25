import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SingleItemPage.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function SingleItemPage({ setCartData }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  if (!product) {
    return <div className="single-item-error">Product not found</div>;
  }

  const handleAddToCart = () => {
    setCartData((prevCartData) => [...prevCartData, product]);
  };

  return (
    <div className="single-item-container">
      <button className="back-button" onClick={() => navigate('/')}>← Back to Home</button>
      <div className="single-item-content">
        <div className="single-item-image-container">
          {product.images ? (
            <img src={product.images[0]} alt={product.title} className="single-item-image" />
          ) : (
            <img src={product.image} alt={product.title} className="single-item-image" />
          )}
        </div>
        <div className="single-item-details">
          <h1 className="single-item-title">{product.title}</h1>
          {product.category && (
            <p className="single-item-category">
              Category: {product.category.name || product.category}
            </p>
          )}
          <p className="single-item-price">${product.price.toFixed(2)}</p>
          <p className="single-item-description">{product.description}</p>
          <button className="single-item-add-to-cart" onClick={handleAddToCart}>
            Add to Cart <ShoppingCartOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
}