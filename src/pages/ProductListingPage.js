import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/CartSlice';
import Header from '../components/Header';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const plants = useSelector(state => state.plants.plants);
  const cartItems = useSelector(state => state.cart.items);
  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div className="product-listing-page">
      <Header />
      <h2>Our Houseplants</h2>
      {categories.map(category => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          <div className="plant-grid">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => {
                const isInCart = cartItems.some(item => item.id === plant.id);
                return (
                  <div key={plant.id} className="plant-card">

                    <h4>{plant.name}</h4>
                    <p>${plant.price.toFixed(2)}</p>
                    <p>{plant.description}</p>
                    <button
                      disabled={isInCart}
                      onClick={() => dispatch(addItem(plant))}
                      className="add-to-cart-btn"
                    >
                      {isInCart ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;