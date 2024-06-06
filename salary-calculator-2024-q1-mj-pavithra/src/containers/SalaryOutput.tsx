import YourSalary from "../components/YourSalary";
import NetSalary from "../components/NetSalary";
import CTC from "../components/CTC";


const SalaryOutput = () => {
    return (
        <div className="SalaryOutput-div">
        <h1>Your Salary</h1>
        <YourSalary />
        <NetSalary />
        <CTC />
        </div>
    );
    }

export default SalaryOutput;