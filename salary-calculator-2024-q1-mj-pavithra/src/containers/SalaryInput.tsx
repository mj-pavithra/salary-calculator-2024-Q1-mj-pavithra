import React from 'react';
import BasicSalary from '../components/GetBasicSalary';
import Earnings from '../components/GetEarnings';
import Deductions from '../components/GetDeductions';

const SalaryInput = () => {
    return (
        <div className='SalaryInput-div'>
            <h1>Calculate Your salary</h1>
            <button className='reset-button'> reset</button>
            <BasicSalary />
            <Earnings />
            <hr />
            <Deductions />
        </div>
    );
}

export default SalaryInput;