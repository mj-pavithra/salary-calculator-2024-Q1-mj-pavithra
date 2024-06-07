import SalaryInput from "../containers/SalaryInput";
import SalaryOutput from "../containers/SalaryOutput";
import '../index.css';

const SalaryCalculater = () => {
    return (
        <div className="flex flex-col md:flex-row p-20 gap-2.5 h-screen">
            <div className="flex-[4_4_0%] bg-white shadow-lg rounded-lg">
                <SalaryInput />
            </div>
            <div className="flex-[3_3_0%]  bg-white shadow-lg rounded-lg">
                <SalaryOutput />
            </div>
        </div>
    );
}

export default SalaryCalculater;
