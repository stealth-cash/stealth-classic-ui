import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Deposit, Landing, Withdraw } from "./pages";
import { BaseLayout } from "./layouts";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route element={<BaseLayout />}>
                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="/withdraw" element={<Withdraw />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}