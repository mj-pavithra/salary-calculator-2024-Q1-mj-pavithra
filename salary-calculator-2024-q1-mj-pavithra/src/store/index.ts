import { configureStore } from '@reduxjs/toolkit';
import earningsReducer from './slices/earningsSlice';
import deductionsReducer from './slices/deductionsSlice';
import basicSalaryReducer from './slices/basicSalarySlice';

const store = configureStore({
    reducer: {
        earnings: earningsReducer,
        deductions: deductionsReducer,
        basicSalary: basicSalaryReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
