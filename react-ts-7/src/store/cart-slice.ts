import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type CartItems = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItems[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        price: number;
      }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeToCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex >= 0) {
        if (state.items[itemIndex].quantity === 1) {
          state.items.splice(itemIndex, 1);
        } else {
          state.items[itemIndex].quantity--;
        }
      }
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
