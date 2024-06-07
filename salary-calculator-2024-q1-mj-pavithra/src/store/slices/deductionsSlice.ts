import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DeductionItem {
    title: string; 
    amount: number;
}

interface DeductionsState {
    items: DeductionItem[];
}

const initialState: DeductionsState = {
    items: [],
};

const deductionsSlice = createSlice({
    name: 'deductions',
    initialState,
    reducers: {
        addDeduction: (state) => {
            state.items.push({ title: '', amount: 0 });
        },
        removeDeduction: (state, action: PayloadAction<number>) => {
            state.items.splice(action.payload, 1);
        },
        updateDeduction: (state, action: PayloadAction<{ index: number; field: 'title' | 'amount'; value: string }>) => {
            const { index, field, value } = action.payload;
            if (field === 'amount') {
                const parsedValue = Number(value);
                state.items[index][field] = isNaN(parsedValue) ? 0 : parsedValue;
            } else {
                state.items[index][field] = value as string;
            }
        },
    },
});

export const { addDeduction, removeDeduction, updateDeduction } = deductionsSlice.actions;
export default deductionsSlice.reducer;
