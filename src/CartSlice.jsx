import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // action.payload = plant object to be added
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;

        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({name, image, cost, quantity: 1});
        }
    },
    // action.payload = the name of the plant item to be removed
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    // action.payload = the name and quantity of the plant to update
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
