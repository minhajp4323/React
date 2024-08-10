import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './ColorSlice';

const store = configureStore({
  reducer: {
    color: colorReducer,
  },
});

export default store;
