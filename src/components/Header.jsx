import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <header className="header">
      <Link to="/">
        <h1>Paradise Nursery</h1>
      </Link>
      <p>Bringing Nature Home</p>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          <div className="cart-icon">
            Cart ({totalItems})
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;