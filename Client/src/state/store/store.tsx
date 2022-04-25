import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login';
import modalReducer from './showModal';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    showModal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
