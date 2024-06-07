import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addDeduction, removeDeduction, updateDeduction } from '../store/slices/deductionsSlice';

interface Deduction {
    title: string;
    amount: number;
}

const Deductions = () => {
    const dispatch = useDispatch();
    const deductions = useSelector((state: RootState) => state.deductions.items);

    const handleChange = (index: number, field: keyof Deduction, value: string) => {
        dispatch(updateDeduction({ index, field, value }));
    };

    return (
        <div className="mb-6 text-left">
            <h2 className="text-xl font-semibold mb-2">Deductions</h2>
            <h3 className="mb-2 text-gray-600">Salary Advances, Loan Deductions and all</h3>
            {deductions.map((deduction, index) => (
                <div key={index} className="grid grid-cols-4 gap-1 mb-4">
                    <input
                        type="text"
                        className="col-span-2 p-2 border border-gray-300 rounded"
                        placeholder="Deduction Details (Title)"
                        value={deduction.title}
                        onChange={(e) => handleChange(index, 'title', e.target.value)}
                    />
                    <input
                        type="text"
                        className="col-span-1 p-2 border border-gray-300 rounded"
                        placeholder="Amount"
                        value={deduction.amount}
                        onChange={(e) => handleChange(index, 'amount', e.target.value)}
                    />
                    <div className="col-span-1 p-2 grid-cols-2 text-left flex items-center">
                        <button
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-black hover:border-red-500 focus:bg-red-500 focus:text-white"
                            onClick={() => dispatch(removeDeduction(index))}
                        >
                            <p className="text-xl">x</p>
                        </button>
                    </div>
                </div>
            ))}
            <button
                className="text-blue-500 p-1.5 hover:border hover:rounded hover:border-blue-500"
                onClick={() => dispatch(addDeduction())}
            >
                <span className="text-3xl">+</span> Add New Deduction
            </button>
        </div>
    );
}

export default Deductions;
