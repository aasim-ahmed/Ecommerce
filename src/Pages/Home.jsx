import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// Function to truncate long descriptions
const truncateDescription = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export default function Home({ data = [], data2 = [], setCartData }) {
  const navigate = useNavigate();

  // Function to handle adding a product to the cart
  const handleCart = (e, product) => {
    e.stopPropagation(); // Prevent the card click event from firing
    setCartData((prevCartData) => [...prevCartData, product]);
  };

  const openSinglePage = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const renderCard = (product, isData2 = false) => (
    <div key={product.id} className="card" onClick={() => openSinglePage(product)}>
      <div className="card-image-container">
        {isData2 && product.images && product.images.length > 0 ? (
          <img src={product.images[0]} alt={product.title} className="card-image" />
        ) : (
          <img src={product.image} alt={product.title} className="card-image" />
        )}
      </div>
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-price">${product.price.toFixed(2)}</p>
        <p className="card-description">{truncateDescription(product.description)}</p>
        {isData2 && <p className="card-category">Category: {product.category?.name}</p>}
        <button
          className="card-button"
          onClick={(e) => handleCart(e, product)}
        >
          Add to Cart <ShoppingCartOutlinedIcon />
        </button>
      </div>
    </div>
  );

  return (
    <div className="home-container">
      <h1 className="page-title">Our Amazing Products</h1>
      <div className="card-container">
        {data.length > 0 ? (
          data.map((product) => renderCard(product))
        ) : (
          <p className="no-products">No products available at the moment. Please check back later!</p>
        )}

        {data2.length > 0 ? (
          data2.map((product) => renderCard(product, true))
        ) : (
          <p className="no-products">No additional products available at the moment.</p>
        )}
      </div>
    </div>
  );
}