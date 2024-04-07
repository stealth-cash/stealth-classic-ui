type Props = {
    placeholder: string;
};

export const Input = ({ placeholder }: Props) => {
    return (
        <div className="w-1/2 m-4 flex flex-col justify-center items-center">
            <label>{placeholder}</label>
            <input className="p-4 w-full text-black border-4 border-black rounded-lg placeholder-black placeholder-bold
                focus:outline-none focus:ring-opacity-50 bg-transparent text-xl"
                type="text" 
                placeholder={`Please enter ${placeholder}`} 
            />
        </div>
    );   
}