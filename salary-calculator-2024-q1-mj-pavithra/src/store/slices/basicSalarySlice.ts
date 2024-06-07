import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BasicSalaryState {
    value: number;
}

const initialState: BasicSalaryState = {
    value: 0,
};

const basicSalarySlice = createSlice({
    name: 'basicSalary',
    initialState,
    reducers: {
        setBasicSalary: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export const { setBasicSalary } = basicSalarySlice.actions;
export default basicSalarySlice.reducer;
