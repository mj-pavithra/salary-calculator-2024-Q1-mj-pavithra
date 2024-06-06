import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SalaryState {
  basicSalary: number;
  earnings: { name: string; amount: number; epf: boolean; etf: boolean }[];
  deductions: { name: string; amount: number; epf: boolean; etf: boolean }[];
}

const initialState: SalaryState = {
  basicSalary: 0,
  earnings: [],
  deductions: [],
};

const salarySlice = createSlice({
  name: 'salary',
  initialState,
  reducers: {
    setBasicSalary(state, action: PayloadAction<number>) {
      state.basicSalary = action.payload;
    },
    addEarning(state, action: PayloadAction<{ name: string; amount: number; epf: boolean; etf: boolean }>) {
      state.earnings.push(action.payload);
    },
    addDeduction(state, action: PayloadAction<{ name: string; amount: number; epf: boolean; etf: boolean }>) {
      state.deductions.push(action.payload);
    },
    removeEarning(state, action: PayloadAction<number>) {
      state.earnings.splice(action.payload, 1);
    },
    removeDeduction(state, action: PayloadAction<number>) {
      state.deductions.splice(action.payload, 1);
    },
    resetForm(state) {
      state.basicSalary = 0;
      state.earnings = [];
      state.deductions = [];
    },
  },
});

export const { setBasicSalary, addEarning, addDeduction, removeEarning, removeDeduction, resetForm } = salarySlice.actions;

export default salarySlice.reducer;
