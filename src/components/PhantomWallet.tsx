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
                        : <img src="phantom.svg"
                            alt="Connect Phantom"
                            onClick={connect}
                            className="p-2 w-16 h-16 rounded-xl bg-indigo-900 hover:bg-indigo-800 
                            ease-in-out duration-150 border-[1px] border-purple-300"
                            />
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