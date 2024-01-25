import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Exhibition } from 'types';
import { RootState } from '.';

interface WishlistSlice {
  items: Exhibition[];
}

const initialState: WishlistSlice = {
  items: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Exhibition>) => {
      state.items = [...state.items, action.payload];
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = [...state.items.filter((item) => item.id !== action.payload)];
    },
  },
});

export const { add, remove } = wishlistSlice.actions;

export const wishlist = (state: RootState) => state.wishlist.items;

export default wishlistSlice.reducer;
