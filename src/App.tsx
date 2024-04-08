import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BaseLayout } from "./layouts";
import { lazy, Suspense } from "react";
import { Loader } from "./components/Loader";

export default function App() {
    const LandingLazy = lazy(() => import("./pages/Landing"));
    const TransferLazy = lazy(() => import("./pages/Transfer"));
    const WithdrawLazy = lazy(() => import("./pages/Withdraw"));

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Suspense fallback={<Loader />}>
                        <LandingLazy />
                    </Suspense>
                } />
                <Route element={<BaseLayout />}>
                    <Route path="/transfer" element={
                        <Suspense fallback={<Loader />}>
                            <TransferLazy />
                        </Suspense>
                    } />
                    <Route path="/withdraw" element={
                        <Suspense fallback={<Loader />}>
                            <WithdrawLazy />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}