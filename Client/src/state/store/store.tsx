import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './register';
import modalReducer from './showModal';

export const store = configureStore({
  reducer: {
    register: registerReducer,
    showModal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
