

const Deductions = () => {
    return (
        <div className="Deduction-div">
            <h2>Deductions</h2>
            <h3>Salary Advances, Loan Deductions and all</h3>
            <div className="Deduction-Inputs">
                    <input type="text" placeholder="Deduction Details (Title)" /> 
                    <input type="text" placeholder="Amount" /> 
                    <button className="close">x</button> 
            </div>
            <button className="add">Add New Deduction</button>
        </div>
    );
    }

export default Deductions;