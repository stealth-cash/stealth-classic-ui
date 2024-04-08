import { NavLink } from "react-router-dom";
import { Button } from "../components/Button";

const Landing = () => {
    return (
        <div className="w-full bg-black h-screen text-matrix flex flex-col-reverse xl:flex-row justify-between items-center">
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center md:items-start gap-10 md:ml-60">
                <h1 className="text-[4vw] break-none md:text-left text-center">
                    Everybody has right of privacy<br/>Defend it
                </h1>
                <NavLink to="/transfer">
                    <Button text="Launch App" onClick={() => {}}/>
                </NavLink>
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-start">
                <img src="uncle-sam.jpg" alt="..." className="p-40 rounded-full"/>
            </div>
        </div>
    );
}

export default Landing;