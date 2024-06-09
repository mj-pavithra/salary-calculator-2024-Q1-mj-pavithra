import React from 'react';
import BasicSalary from '../components/BasicSalary';
import Earnings from '../components/Earnings';
import Deductions from '../components/Deductions';
import { FaSyncAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setBasicSalary } from '../store/slices/basicSalarySlice';
import { resetEarnings } from '../store/slices/earningsSlice'; // Assuming you have a reset action
import { resetDeductions } from '../store/slices/deductionsSlice'; // Assuming you have a reset action

const SalaryInput = () => {
    const dispatch = useDispatch();


    const handleReset = () => {
        // window.location.reload(); // This is easy
        dispatch(setBasicSalary(0));  //But,
        dispatch(resetEarnings());    //This is for,
        dispatch(resetDeductions());  //Just for learning

    };

    return (
        <div className="flex-4 flex-shrink-0 p-5 md:p-10 bg-white  rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h1 className='text-2xl font-bold'>Calculate Your Salary</h1>
                <button
                    className='text-blue-500 hover:bg-red-500 hover:text-white rounded p-2 flex items-center'
                    onClick={handleReset}
                >
                    <FaSyncAlt className="mr-2" />
                    Reset
                </button>
            </div>
            <BasicSalary />
            <Earnings />
            <hr className="my-4" />
            <Deductions />
        </div>
    );
}

export default SalaryInput;
