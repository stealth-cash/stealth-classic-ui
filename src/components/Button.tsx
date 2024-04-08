import { MouseEventHandler } from "react";

type Props = {
    text: string;
    isDisabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ text, onClick, isDisabled }: Props) => {
    return (
        <button
            className={`
                w-48 h-16 uppercase text-[#92e5a1] border-2 border-[#92e5a1] p-4 bg-black ease-in-out duration-150 
                ${isDisabled 
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer hover:text-black hover:bg-[#92e5a1]"
                }
            `}
            onClick={onClick}
            disabled={isDisabled}
        >
            {text}
        </button>
    );
}