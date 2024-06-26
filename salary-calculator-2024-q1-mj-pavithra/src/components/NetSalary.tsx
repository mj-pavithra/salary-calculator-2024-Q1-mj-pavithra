

type NetSalaryProps = {
    netSalary: number| null;
  };
function formatNumberWithCommas(number: number): string {
    return number.toLocaleString('en-US');
}
  const NetSalary: React.FC<NetSalaryProps> = ({ netSalary }) => {

    // const formattedNetSalary = formatNumberWithCommas(netSalary);
    let formattedNetSalary = '';
    if (netSalary !== null) {
      formattedNetSalary = formatNumberWithCommas(netSalary);
  }
    return (
        <div className="flex justify-between items-center  p-4 rounded-lg mb-4 border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold">Net Salary (Takehome)</h2>
            <h2 className="text-lg font-bold">Rs. {formattedNetSalary}</h2>
        </div>
    );
}

export default NetSalary;
