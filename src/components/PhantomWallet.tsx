import { FC, Fragment } from "react";
import { usePhantom } from "../hooks/usePhantom";

export const PhantomWallet: FC = () => {
    const { user, walletAvailable, connect, disconnect } = usePhantom();  

    return (
        <div>
            <p>{}</p>
            { walletAvailable ?
                <Fragment>
                    <button disabled={user.connected} onClick={connect}>Connect to Phantom</button>
                    <button disabled={!user.connected} onClick={disconnect}>Disconnect from Phantom</button>
                    { user.connected ? <p>Your public key is : {user.pubKey?.toBase58()}</p> : null }
                </Fragment>
            :
                <p>Opps!!! Phantom is not available. Go get it 
                    <a href="https://phantom.app/">https://phantom.app/</a>.
                </p>
            }
        </div>
    );
}