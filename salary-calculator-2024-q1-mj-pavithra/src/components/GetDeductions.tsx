import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addDeduction, removeDeduction, updateDeduction } from '../store/slices/deductionsSlice';

interface Deduction {
    title: string;
    amount: number | null;
}

const Deductions = () => {
    const dispatch = useDispatch();
    const deductions = useSelector((state: RootState) => state.deductions.items);
    const [errors, setErrors] = useState<string[]>([]);

    const handleChange = (index: number, field: keyof Deduction, value: string) => {
        const parsedValue = parseFloat(value as string);
        const newErrors = [...errors];

        if (field === 'title') {
            if (!value) {
                newErrors[index] = 'Deduction title is required';
            } else {
                newErrors[index] = '';
                dispatch(updateDeduction({ index, field, value }));
            }
        } else if (field === 'amount') {
            if (!deductions[index].title) {
                newErrors[index] = 'Please fill the title before the amount';
            } else if (!value) {
                newErrors[index] = 'Deduction amount is required';
            } else if (isNaN(parsedValue)) {
                newErrors[index] = 'Deduction amount must be a number';
            } else if (parsedValue < 0) {
                newErrors[index] = 'Deduction amount must be a non-negative number';
            } else {
                newErrors[index] = '';
                dispatch(updateDeduction({ index, field, value: parsedValue.toString() }));
            }
        } else {
            dispatch(updateDeduction({ index, field, value: value || '' }));  // Ensure value is a string
        }

        setErrors(newErrors);
    };

    const handleReset = () => {
        deductions.forEach((_, index) => {
            dispatch(updateDeduction({ index, field: 'title', value: '' }));
            dispatch(updateDeduction({ index, field: 'amount', value: '' }));
        });
        setErrors([]);
    };

    return (
        <div className="mb-6 text-left">
            <h2 className="text-xl font-semibold mb-2">Deductions</h2>
            <h3 className="mb-2 text-gray-600">Salary Advances, Loan Deductions and all</h3>
            {deductions.map((deduction, index) => (
                <div key={index} className="grid md:grid-cols-4 gap-1 mb-4">
                    <input
                        type="text"
                        className="md:col-span-2 p-2 border border-gray-300 rounded"
                        placeholder="Deduction Details (Title)"
                        value={deduction.title}
                        onChange={(e) => handleChange(index, 'title', e.target.value)}
                    />
                    <input
                        type="text"
                        className="col-span-1 p-2 border border-gray-300 rounded"
                        placeholder="Amount"
                        value={deduction.amount || ''}
                        onChange={(e) => handleChange(index, 'amount', e.target.value)}
                    />
                    <div className="col-span-1 p-2 grid-cols-2 text-left flex items-center">
                        <button
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-black hover:border-red-500 focus:bg-red-500 focus:text-white"
                            onClick={() => {
                                dispatch(removeDeduction(index));
                                setErrors(prevErrors => {
                                    const newErrors = [...prevErrors];
                                    newErrors.splice(index, 1);
                                    return newErrors;
                                });
                            }}
                        >
                            <p className="text-xl">x</p>
                        </button>
                    </div>
                    {errors[index] && <p className="text-red-500">{errors[index]}</p>}
                </div>
            ))}
            <button
                className="text-blue-500 p-1.5 hover:border hover:rounded hover:border-blue-500"
                onClick={() => {
                    dispatch(addDeduction());
                    setErrors([...errors, '']);
                }}
            >
                <span className="text-3xl">+</span> Add New Deduction
            </button>
        </div>
    );
};

export default Deductions;
