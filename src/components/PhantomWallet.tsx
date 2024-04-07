import { FC, Fragment, useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";

type PhantomEvent = "disconnect" | "connect" | "accountChanged";

interface ConnectOpts {
    onlyIfTrusted: boolean;
}

interface PhantomProvider {
    connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
    disconnect: ()=>Promise<void>;
    on: (event: PhantomEvent, callback: (args: PublicKey) => void) => void;
    isPhantom: boolean;
}

type WindowWithSolana = Window & { 
    solana?: PhantomProvider;
}

export const PhantomWallet: FC = () => {
    const [ walletAvail, setWalletAvail ] = useState(false);
    const [ provider, setProvider ] = useState<PhantomProvider | null>(null);
    const [ connected, setConnected ] = useState(false);
    const [ pubKey, setPubKey ] = useState<PublicKey | null>(null);


    useEffect( ()=>{
        if ("solana" in window) {
            const solWindow = window as WindowWithSolana;
            if (solWindow?.solana?.isPhantom) {
                setProvider(solWindow.solana);
                setWalletAvail(true);
                solWindow.solana.connect({ onlyIfTrusted: true });
            }
        }
    }, []);

    useEffect( () => {
        provider?.on("connect", (publicKey: PublicKey)=>{ 
            console.log(`connect event: ${publicKey}`);
            setConnected(true); 
            setPubKey(publicKey);
        });
        provider?.on("disconnect", ()=>{ 
            console.log("disconnect event");
            setConnected(false); 
            setPubKey(null);
        });

    }, [provider]);


    const connectHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        console.log(`Connect handler`);
        provider?.connect()
        .catch((err) => console.error("connect ERROR:", err));
    };

    const disconnectHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        console.log("Disconnect handler");
        provider?.disconnect()
        .catch((err) => console.error("disconnect ERROR:", err));
    };

    return (
        <div>
            { walletAvail ?
                <Fragment>
                    <button disabled={connected} onClick={connectHandler}>Connect to Phantom</button>
                    <button disabled={!connected} onClick={disconnectHandler}>Disconnect from Phantom</button>
                    { connected ? <p>Your public key is : {pubKey?.toBase58()}</p> : null }
                </Fragment>
            :
                <p>Opps!!! Phantom is not available. Go get it 
                    <a href="https://phantom.app/">https://phantom.app/</a>.
                </p>
            }
        </div>
    );
}