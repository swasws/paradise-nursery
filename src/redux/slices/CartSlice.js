import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of { id, name, price, thumbnail, quantity }
  totalItems: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const plant = action.payload;
      const existingItem = state.items.find(item => item.id === plant.id);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalItems += 1;
        state.totalCost += plant.price;
      } else {
        state.items.push({ ...plant, quantity: 1 });
        state.totalItems += 1;
        state.totalCost += plant.price;
      }
    },
    removeItem(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalCost -= item.quantity * item.price;
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },
    updateQuantity(state, action) {
      const { id, change } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        if (change === 'increase') {
          item.quantity += 1;
          state.totalItems += 1;
          state.totalCost += item.price;
        } else if (change === 'decrease' && item.quantity > 1) {
          item.quantity -= 1;
          state.totalItems -= 1;
          state.totalCost -= item.price;
        } else if (change === 'decrease' && item.quantity === 1) {
          state.items = state.items.filter(i => i.id !== id);
          state.totalItems -= 1;
          state.totalCost -= item.price;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;