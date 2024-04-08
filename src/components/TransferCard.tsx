import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { Input } from "./Input";
import { StepBar } from "./StepBar";

const TransferCard = () => (
    <div className="w-3/4 md:w-1/2 h-3/4 md:h-1/2 p-4 md:p-0 bg-transparent flex flex-col items-center 
        border-r-2 border-l-2 border-b-4 border-[#92e5a1]">
        <div className="w-full h-20 flex flex-row bottom-0 divide-black divide-x-4">
            <NavLink to="/transfer" 
                className="w-1/2 p-2 flex flex-col items-center justify-center text-2xl font-bold
                bg-[#80ce87] text-black">Transfer
            </NavLink>
            <NavLink to="/withdraw"
                className="w-1/2 p-2 flex flex-col items-center justify-center text-2xl font-bold 
                bg-[#0e1f17] hover:bg-[#264e3b] text-matrix">Withdraw
            </NavLink>
        </div>
        <div className="w-full h-full flex flex-col justify-evenly items-center border-t-[1px] border-[#92e5a1]">
            <h1 className="text-[#92e5a1] text-3xl font-bold">Withdraw</h1>
            <Input placeholder="Recipient Address"/>
            <StepBar />
            <Button text="Transfer" isDisabled={true} />
        </div>
    </div>
);

export default TransferCard;