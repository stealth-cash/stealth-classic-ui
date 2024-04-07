type Props = {
    placeholder: string;
};

export const Input = ({ placeholder }: Props) => {
    return (
        <div className="w-1/2 m-4 flex flex-col justify-center items-start">
            <label className="text-base">{placeholder}</label>
            <input className="p-4 w-full text-[#92e5a1] border-2 border-[#92e5a1] rounded-lg placeholder-[#92e5a1] placeholder-bold
                focus:outline-none focus:ring-opacity-50 bg-transparent text-xl"
                type="text" 
                placeholder={`Please enter ${placeholder}`} 
            />
        </div>
    );   
}