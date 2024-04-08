import { Suspense, lazy } from "react";
import { Loader } from "../components/Loader";

export const Deposit = () => {
    const DepositCardLazy = lazy(() => import("../components/DepositCard"));
    return (
        <Suspense fallback={<Loader />}>
            <DepositCardLazy />
        </Suspense>
    );
}