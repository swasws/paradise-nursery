import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantity, removeItem } from '../redux/slices/CartSlice';
import Header from '../components/Header';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const { items, totalItems, totalCost } = useSelector(state => state.cart);

  return (
    <div className="shopping-cart-page">
      <Header />
      <h2>Shopping Cart</h2>
      <div className="cart-summary">
        <p>Total Items: {totalItems}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
        <button onClick={() => alert('Coming Soon')}>Checkout</button>
        <Link to="/products">
          <button className="continue-shopping-btn">Continue Shopping</button>
        </Link>
      </div>
      <div className="cart-items">
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="cart-item-card">
              <img src={item.thumbnail} alt={item.name} className="cart-item-thumbnail" />
              <h4>{item.name}</h4>
              <p>Unit Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => dispatch(updateQuantity({ id: item.id, change: 'decrease' }))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(updateQuantity({ id: item.id, change: 'increase' }))}>+</button>
              </div>
              <button
                className="delete-btn"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;