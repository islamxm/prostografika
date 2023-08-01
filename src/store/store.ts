import { configureStore } from '@reduxjs/toolkit';

import mainReducer from './slices/mainSlice/mainSlice';

const store = configureStore({
  reducer: { mainReducer },
  // devTools: process && process?.env.NODE_ENV !== 'production' ? true : false
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;

