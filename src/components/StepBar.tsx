const Radio = ({label}: {label: string}) => {
    return (
        <div className="flex flex-col items-center me-4 md:m-10">
            <input 
                id="radio" type="radio"name="colored-radio" 
                className="outline-none w-8 h-8 bg-[#00FFA3] accent-[#00FFA3] border-2 border-[#00FFA3]" />
            <label htmlFor="radio" className="ms-2 text-xl font-medium text-matrix">{label} SOL</label>
        </div>    
    );
}

export const StepBar = () => {
    return (
        <div className="flex flex-wrap text-black w-full flex flex-row justify-center items-center w-1/2">
            {["0.1", "1", "10", "100"].map((l, idx) => <Radio key={idx} label={l} />)}
        </div>
    );
}