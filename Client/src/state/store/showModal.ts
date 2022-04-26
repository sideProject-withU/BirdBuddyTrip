import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { modalState } from '../typeDefs';

const initialState: modalState = {
  value: false,
};

export const modalSlice = createSlice({
  name: 'showModal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { showModal } = modalSlice.actions;
export default modalSlice.reducer;
