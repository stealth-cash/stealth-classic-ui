import { FC, Fragment } from "react";
import { usePhantom } from "../hooks/usePhantom";
import { Button } from ".";

export const PhantomWallet: FC = () => {
    const { user, walletAvailable, connect, disconnect } = usePhantom();  

    return (
        <div>
            <p>{}</p>
            { walletAvailable ?
                <Fragment>
                    {user.connected 
                        ? <Button onClick={disconnect} text="Disconnect" />
                        : <Button onClick={connect} text="Connect Phantom"/>
                    }
                </Fragment>
            :
                <p>Opps!!! Phantom is not available. Go get it 
                    <a href="https://phantom.app/">https://phantom.app/</a>.
                </p>
            }
        </div>
    );
}