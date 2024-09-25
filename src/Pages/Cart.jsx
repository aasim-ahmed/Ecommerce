
import React from 'react';
import './Cart.css';

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => (
  <div className="cart-item">
    <div className="cart-item-details">
      <img src={`/api/placeholder/${item.image}`} alt={item.name} className="cart-item-image" />
      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
    </div>
    <div className="cart-item-actions">
      <button onClick={() => onDecrease(item.id)} className="quantity-btn">-</button>
      <span className="item-quantity">{item.quantity}</span>
      <button onClick={() => onIncrease(item.id)} className="quantity-btn">+</button>
      <button onClick={() => onRemove(item.id)} className="remove-btn">×</button>
    </div>
  </div>
);

export default function Cart({ cartData }) {
  // Check if cartData is an array and has items
  const isValidCart = Array.isArray(cartData) && cartData.length > 0;

  const totalItems = isValidCart ? cartData.reduce((sum, item) => sum + item.quantity, 0) : 0;
  const subtotal = isValidCart ? cartData.reduce((sum, item) => sum + item.price * item.quantity, 0) : 0;

  const handleRemove = (id) => {
    console.log(`Remove item with id: ${id}`);
    // Implement remove logic here
  };

  const handleIncrease = (id) => {
    console.log(`Increase quantity of item with id: ${id}`);
    // Implement increase logic here
  };

  const handleDecrease = (id) => {
    console.log(`Decrease quantity of item with id: ${id}`);
    // Implement decrease logic here
  };

  if (!isValidCart) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-icon">🛒</div>
        <h1 className="empty-cart-title">Your Cart is Empty</h1>
        <p className="empty-cart-message">Add some items to your cart and come back here to complete your purchase.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-content">
        {cartData.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemove}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        ))}
        <div className="cart-summary">
          <div className="subtotal">
            <span>Subtotal ({totalItems} items)</span>
            <span className="subtotal-amount">${subtotal.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}