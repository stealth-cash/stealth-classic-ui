import { Button, Input, StepBar } from ".";

export const Card = () => (
    <div className="w-3/4 md:w-1/2 h-3/4 md:h-1/2 p-4 md:p-0 matrix rounded-xl flex flex-col items-center">
        <div className="w-full h-20 flex flex-row bottom-0 border-b-4 border-black divide-black divide-x-4">
            <a href="/deposit"
                className="w-1/2 p-2 flex flex-col items-center justify-center border-black text-black text-xl font-bold hover:bg-[#00FFA3]">
                Deposit
            </a>
            <a href="/withdraw"
                className="w-1/2 p-2 flex flex-col items-center justify-center border-black text-black text-xl font-bold hover:bg-[#00FFA3]">
                Withdraw
            </a>
        </div>
        <div className="w-full h-full flex flex-col justify-evenly items-center">
            <h1 className="text-black text-3xl font-bold">SEND SOL PRIVATELY</h1>
            <Input placeholder="Recipient Address"/>
            <StepBar />
            <Button text="Transfer" />
        </div>
    </div>
);