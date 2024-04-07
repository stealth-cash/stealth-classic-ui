import { PhantomWallet } from "./PhantomWallet";

export const Navbar = () => {
    return (
        <div className="w-full md:w-1/2 h-20 flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center">
                <img src="logo.png" alt="..." className="w-20 h-20"/>
                <h1 className="text-3xl text-white">Stealth Cash</h1>
                <ul className="ml-16 flex flex-row justify-start items-center gap-8">
                    <li className="text">Docs</li>
                    <li className="text">Whitepaper</li>
                </ul>
            </div>
            <PhantomWallet />
        </div>
    );
}