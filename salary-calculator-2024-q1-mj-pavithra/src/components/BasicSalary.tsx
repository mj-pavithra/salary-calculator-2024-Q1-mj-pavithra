import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setBasicSalary,  } from '../store/slices/basicSalarySlice';



const BasicSalary = () => {
    const dispatch = useDispatch();
    const basicSalary = useSelector((state: RootState) => state.basicSalary.value);
    const [error, setError] = React.useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

      
        if (!value) {
            setError('Basic salary is required');
            dispatch(setBasicSalary(0));
        } else if (isNaN(Number(value))) {
            setError('Basic salary must be a number');
        } else if (Number(value) < 0) {
            setError('Basic salary must be a positive number');
        }
        else if (Number(value) > 1000000) {
            setError(value+'is unrealistic');
        }
        else {
            setError('');
            dispatch(setBasicSalary(Number(value)));
        }
    };

    return (
        <div className="mb-6 text-left">
            <h2 className="text-xl font-semibold mb-2">Basic Salary</h2>
            <input
                type="text"
                className="min-w-[350px] md:min-w-[450px] p-2 border border-gray-300 rounded"
                placeholder="Enter Basic Salary"
                value={basicSalary || ''}
                onChange={handleChange}
            />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}

export default BasicSalary;
