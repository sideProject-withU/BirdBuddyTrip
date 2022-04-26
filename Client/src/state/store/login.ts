import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginState } from '../typeDefs';

const initialState: loginState = {
  value: false,
};

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    isLogin: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { isLogin } = LoginSlice.actions;
export default LoginSlice.reducer;
