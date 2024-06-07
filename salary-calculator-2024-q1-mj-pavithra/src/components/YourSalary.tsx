type YourSalaryProps = {
    basicSalary: number;
    totalEarnings: number;
    totalDeductions: number;
    EPFcut: number;
    APIT = {APIT}
    
    };

    function formatNumberWithCommas(number: number): string {
        return number.toLocaleString('en-US');
    }

const YourSalary: React.FC<YourSalaryProps> = ({basicSalary, totalEarnings, totalDeductions, EPFcut,APIT}) => {

    const formattedBasicSalary = formatNumberWithCommas(basicSalary);
    const formattedTotalEarnings = formatNumberWithCommas(totalEarnings);
    const formattedTotalDeductions = formatNumberWithCommas(totalDeductions);
    const formattedEPFcut = formatNumberWithCommas(EPFcut);
    const formattedAPIT = formatNumberWithCommas(APIT);

  return (
      <div className="mb-6 p-2.5 text-left">
          <div className="flex justify-between   rounded-lg mb-2.5">
              <h3 className="text-gray-500">Items</h3>
              <h3 className="text-gray-500">Amount</h3>
          </div>
          <div className="flex justify-between  rounded-lg mb-2.5">
              <h3>Basic Salary</h3>
              <h3>{formattedBasicSalary}.00</h3>
          </div>
            <div className="flex justify-between  rounded-lg mb-2.5">
                <h3>Total Earnings</h3>
                <h3>+ {formattedTotalEarnings}.00</h3>
            </div>

            <div className="flex justify-between  rounded-lg mb-2.5">
                <h3>Total Deductions</h3>
                <h3>- {formattedTotalDeductions}.00</h3>
            </div>
            <div className="flex justify-between  rounded-lg ">
                <h3>EPF</h3>
                <h3>- {formattedEPFcut}.00</h3>
            </div>
            <div className="flex justify-between  rounded-lg ">
                <h3>APIT</h3>
                <h3>- {formattedAPIT}.00</h3>
            </div>
            
      </div>
  );
}

export default YourSalary;
