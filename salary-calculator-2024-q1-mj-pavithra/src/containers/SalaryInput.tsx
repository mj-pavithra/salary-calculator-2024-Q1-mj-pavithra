import React from 'react';
import BasicSalary from '../components/GetBasicSalary';
import Earnings from '../components/GetEarnings';
import Deductions from '../components/GetDeductions';
import { FaSyncAlt } from 'react-icons/fa';

const SalaryInput = () => {
    return (
        <div className="flex-4 flex-shrink-0 p-5 md:p-10 bg-white  rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h1 className='text-2xl font-bold'>Calculate Your Salary</h1>
                <button className='text-blue-500 hover:bg-red-500 hover:text-white rounded p-2 flex items-center'>
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
