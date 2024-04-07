export const Footer = () => {
    return (
        <div className="w-full md:w-1/2 h-20 flex flex-row justify-between items-center">
            <p><span className="text-white font-semibold">Donate SOLs: </span> {import.meta.env.VITE_STEALTH_FEE_ADDRESS}</p>
        </div>
    );
}