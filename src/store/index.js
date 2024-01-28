// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  // Redux Toolkit automatically includes thunk
});

export default store;
