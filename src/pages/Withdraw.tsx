import { Loader } from "../components/Loader";
import { Suspense, lazy } from "react";

const Withdraw = () => {
    const WithdrawCardLazy = lazy(() => import("../components/WithdrawCard"));
    
    return (
        <Suspense fallback={<Loader />}>
            <WithdrawCardLazy />
        </Suspense>
    );
}

export default Withdraw;