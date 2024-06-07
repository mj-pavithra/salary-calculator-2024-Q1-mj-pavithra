type CTCProps = {
    EPFcut: number;
        };

    function formatNumberWithCommas(number: number): string {
        return number.toLocaleString('en-US');
    }

const CTC : React.FC<CTCProps> = ({EPFcut}) => {
    const employerEPF = (EPFcut/0.08)*0.12;
    const employerETF = (EPFcut/0.08)*0.03;
    const CTCamount = (EPFcut/0.08)+employerEPF+employerETF;

    const formattedEmployerEPF = formatNumberWithCommas(employerEPF);
    const formattedEmployerETF = formatNumberWithCommas(employerETF);
    const formattedCTCamount = formatNumberWithCommas(CTCamount);
    return (
        <div className="mb-6 p-2.5">
            <h3 className=" font-s text-gray-500 mb-2">Contribution from the Employer</h3>
            <div className="flex justify-between rounded-lg  mb-2.5">
                <h3>Employeer EPF (12%)</h3>
                <h3>Rs. {formattedEmployerEPF}.00</h3>
            </div>
            <div className="flex justify-between  rounded-lg ">
                <h3>Employeer ETF (3%)</h3>
                <h3>Rs. {formattedEmployerETF}.00</h3>
            </div>
            <br />
            <div className="flex justify-between  rounded-lg ">
                <h3>Cost to Company</h3>
                <h3>Rs. {formattedCTCamount}.00</h3>
            </div>
        </div>
    );
}

export default CTC;
