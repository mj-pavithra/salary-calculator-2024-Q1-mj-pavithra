import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addEarning, removeEarning, updateEarning } from '../store/slices/earningsSlice';

interface Earning {
    title: string;
    amount: number | null;
    epfEtf: boolean;
}

const Earnings = () => {
    const dispatch = useDispatch();
    const earnings = useSelector((state: RootState) => state.earnings.items);
    const [errors, setErrors] = useState<string[]>([]);

    const handleChange = (index: number, field: keyof Earning, value: string | boolean) => {
        const parsedValue = parseFloat(value as string);
        const newErrors = [...errors];
        
        if (field === 'title') {
            if (!value) {
                newErrors[index] = 'Earning title is required';
            } else {
                newErrors[index] = '';
                dispatch(updateEarning({ index, field, value }));
            }
        } else if (field === 'amount') {
            if (!earnings[index].title) {
                newErrors[index] = 'Please fill the title before the amount';
            } else if (!value) {
                newErrors[index] = 'Earning amount is required';
            } else if (isNaN(parsedValue)) {
                newErrors[index] = 'Earning amount must be a number';
            } else if (parsedValue < 0) {
                newErrors[index] = 'Earning amount must be a non-negative number';
            } else {
                newErrors[index] = '';
                dispatch(updateEarning({ index, field, value: parsedValue.toString() }));
            }
        } else {
            dispatch(updateEarning({ index, field, value }));
        }

        setErrors(newErrors);
    };

    return (
        <div className="mb-6 text-left">
            <h2 className="text-xl font-semibold mb-2">Earnings</h2>
            <h3 className="mb-2 text-gray-600">Allowance, Fixed Allowance, Bonus and etc.</h3>
            {earnings.map((earning, index) => (
                <div key={index} className="grid  md:grid-cols-4 gap-1 mb-4">
                    <input
                        type="text"
                        className="md:col-span-2 p-2 border border-gray-300 rounded"
                        placeholder="Pay Details (Title)"
                        value={earning.title}
                        onChange={(e) => handleChange(index, 'title', e.target.value)}
                    />
                    <input
                        type="text"
                        className="col-span-1 p-2 border border-gray-300 rounded"
                        placeholder="Amount"
                        value={earning.amount|| ''}
                        onChange={(e) => handleChange(index, 'amount', e.target.value)}
                    />
                    <div className="col-span-1 p-2 grid-cols-2 text-left flex items-center">
                        <button
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-black hover:border-red-500 focus:bg-red-500 focus:text-white"
                            onClick={() => {
                                dispatch(removeEarning(index));
                                setErrors(prevErrors => {
                                    const newErrors = [...prevErrors];
                                    newErrors.splice(index, 1);
                                    return newErrors;
                                });
                            }}
                        >
                            <p className="text-xl">x</p>
                        </button>
                        <label htmlFor={`EPF/ETF-${index}`} className="text-l p-2">
                            <input
                                type="checkbox"
                                id={`EPF/ETF-${index}`}
                                name="EPF/ETF"
                                checked={earning.epfEtf}
                                onChange={(e) => handleChange(index, 'epfEtf', e.target.checked)}
                                className="mr-2"
                            />
                            EPF/ETF
                        </label>
                    </div>
                    {errors[index] && <p className="text-red-500">{errors[index]}</p>}
                </div>
            ))}
            <button
                className="text-blue-500 hover:border p-1.5 hover:rounded hover:border-blue-500"
                onClick={() => {
                    dispatch(addEarning());
                    setErrors([...errors, '']);
                }}
            >
                <span className="text-3xl">+</span> Add New Allowance
            </button>
        </div>
    );
}

export default Earnings;
