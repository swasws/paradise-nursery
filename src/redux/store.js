import { configureStore } from '@reduxjs/toolkit';
import plantReducer from './slices/PlantSlice';
import cartReducer from './slices/CartSlice';

export const store = configureStore({
  reducer: {
    plants: plantReducer,
    cart: cartReducer,
  },
});