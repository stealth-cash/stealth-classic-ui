import { MouseEventHandler } from "react";

type Props = {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ text, onClick }: Props) => {
    return (
        <button
            className="w-48 h-16 uppercase text-[#92e5a1] border-2 border-[#92e5a1] p-4 hover:text-black bg-black hover:bg-[#92e5a1] ease-in-out duration-150"
            onClick={onClick}
        >
            {text}
        </button>
    );
}