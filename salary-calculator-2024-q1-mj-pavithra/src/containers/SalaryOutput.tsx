import YourSalary from "../components/YourSalary";
import NetSalary from "../components/NetSalary";
import CTC from "../components/CTC";
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';




const SalaryOutput = () => {

    const basicSalary = useSelector((state: RootState) => state.basicSalary.value);
    const earnings = useSelector((state: RootState) => state.earnings.items);
    const deductions = useSelector((state: RootState) => state.deductions.items);
    const totalEarnings = earnings.reduce((acc, item) => acc + item.amount, 0);
    const epfCut = (basicSalary + earnings.filter(item => item.epfEtf).reduce((acc, item) => acc + item.amount, 0))*0.08;
    

    const totalDeductions = deductions.reduce((acc, item) => acc + item.amount, 0);
    const grossEarning = basicSalary + totalEarnings - totalDeductions ;
    let APIT: any = grossEarning * 0.18 ;
    const APITfixedRate = 25000;
    let netSalary = grossEarning - APIT- epfCut;

    if(grossEarning === 0){
        APIT = 0;
    }
     else if(grossEarning > 100000){
     APIT = (grossEarning-100000) * 0.18 + APITfixedRate;
    }else
    {
        APIT = "salary i less than 100000 so no APIT";
        netSalary = grossEarning - epfCut;
    }



    return (
        <div className=" flex-4 flex-shrink-0 p-5 md:p-10 bg-white  rounded-lg text-left">
            <h1 className="text-2xl font-bold mb-4">Your Salary</h1>
            <YourSalary basicSalary ={basicSalary}
                        totalEarnings ={totalEarnings}
                        totalDeductions ={totalDeductions}
                        EPFcut = {epfCut}
                        APIT = {APIT}
                        />
            <NetSalary  netSalary = {netSalary}/>
            <CTC EPFcut = {epfCut} />

            
        </div>
    );
}

export default SalaryOutput;


