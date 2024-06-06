import { configureStore } from '@reduxjs/toolkit';
import salaryReducer from './slices/salarySlice';

const store = configureStore({
  reducer: {
    salary: salaryReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
