

const Earnings = () => {
    return (
        <div className=" Earning-div">
            <h2>Earnings</h2>
            <h3>Allowance, Fixed Allowance, Bonus and etc.</h3>
            <div className="Earning-Inputs">
                    <input type="text" placeholder="Pay Details (Title)" /> 
                    <input type="text" placeholder="Amount" /> 
                    <button className="close">x</button> 
                    <input type="checkbox" id="EPF/ETF" name="EPF/ETF" value="yes"></input>
            </div>
            <button className="add">Add New Allowance</button>
        </div>
    );
    }

export default Earnings;