import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EarningsItem {
    title: string; 
    amount: number; 
    epfEtf: boolean;
}

interface EarningsState {
    items: EarningsItem[];
}

const initialState: EarningsState = {
    items: [],
};

const earningsSlice = createSlice({
    name: 'earnings',
    initialState,
    reducers: {
        resetEarnings: (state) => {
        state.items = [];
        },
        addEarning: (state) => {
            state.items.push({ title: '', amount: 0, epfEtf: false });
        },
        removeEarning: (state, action: PayloadAction<number>) => {
            state.items.splice(action.payload, 1);
        },
        updateEarning: (state, action: PayloadAction<{ index: number; field: 'title' | 'amount' | 'epfEtf'; value: string | boolean }>) => {
            const { index, field, value } = action.payload;
            if (field === 'amount') {
                const parsedValue = Number(value);
                state.items[index][field] = isNaN(parsedValue) ? 0 : parsedValue;
            } else if (field === 'epfEtf') {
                state.items[index][field] = value as boolean;
            } else {
                state.items[index][field] = value as string;
            }
        },
    },
});

export const { addEarning, removeEarning, updateEarning, resetEarnings, } = earningsSlice.actions;
export default earningsSlice.reducer;
