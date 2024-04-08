import { Suspense, lazy } from "react";
import { Loader } from "../components/Loader";

const Transfer = () => {
    const TransferCardLazy = lazy(() => import("../components/TransferCard"));
    
    return (
        <Suspense fallback={<Loader />}>
            <TransferCardLazy />
        </Suspense>
    );
}

export default Transfer;