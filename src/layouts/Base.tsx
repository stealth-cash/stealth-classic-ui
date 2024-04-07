import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const BaseLayout: FC = () => {
    return (
        <div className="w-full h-screen bg-gray-900 text-white flex flex-col justify-between items-center">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}