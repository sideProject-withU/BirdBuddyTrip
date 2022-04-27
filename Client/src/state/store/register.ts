import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerState } from '../typeDefs';

const initialState: registerState = {
  loginstate: false,
  signupClick: false,
};

export const RegisterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    isLogin: (state, action: PayloadAction<boolean>) => {
      state.loginstate = action.payload;
    },
    moveToSignupPage: (state, action: PayloadAction<boolean>) => {
      state.signupClick = action.payload;
    },
  },
});

export const { isLogin, moveToSignupPage } = RegisterSlice.actions;
export default RegisterSlice.reducer;
