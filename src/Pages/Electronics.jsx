import React from 'react';
import './Home.css';
import '../App.css';


export default function Electronics({ data ,data2}) {
  // Function to truncate the description text
  const truncateDescription = (description) => {
    return description.length > 100 ? description.substring(0, 100) + '...' : description;
  };

  // Filter products based on the 'electronics' category
  const filteredProducts = data.filter(product => product.category === 'electronics');

  return (
    <>
      <div className="card-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.title} className="card-image" />
              <div className="card-content">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-price">${product.price.toFixed(2)}</p>
                <p className="card-description">{truncateDescription(product.description)}</p>
                <button className="card-button">Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">No products available at the moment. Please check back later!</p>
        )}
      </div>
    </>
  );
}
