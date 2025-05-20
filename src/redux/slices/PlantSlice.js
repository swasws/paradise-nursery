import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plants: [
    { id: 1, name: 'Snake Plant', price: 15, description: 'Air-purifying plant', category: 'Air Purifying' },
    { id: 2, name: 'Lavender', price: 20, description: 'Aromatic plant', category: 'Aromatic' },
    { id: 3, name: 'Pothos', price: 12, description: 'Easy-care plant', category: 'Decorative' },
    { id: 4, name: 'Peace Lily', price: 18, description: 'Air-purifying beauty', category: 'Air Purifying' },
    { id: 5, name: 'Rosemary', price: 22, description: 'Fragrant herb', category: 'Aromatic' },
    { id: 6, name: 'Monstera', price: 25, description: 'Statement plant', category: 'Decorative' },
  ],
};

const plantSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {},
});

export default plantSlice.reducer;