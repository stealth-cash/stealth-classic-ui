import { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { store } from "../store/store";
import { connectWallet, disconnectWallet } from "../store/modules/auth";

type PhantomEvent = "disconnect" | "connect" | "accountChanged";

interface ConnectOpts {
    onlyIfTrusted: boolean;
}

interface PhantomProvider {
    connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
    disconnect: () => Promise<void>;
    on: (event: PhantomEvent, callback: (args: PublicKey) => void) => void;
    isPhantom: boolean;
}

type WindowWithSolana = Window & { 
    solana?: PhantomProvider;
}

export const usePhantom = () => {
    const [walletAvailable, setWalletAvailable] = useState(false);
    const [provider, setProvider] = useState<PhantomProvider | null>(null);
    const [connected, setConnected] = useState(false);
    const [pubKey, setPubKey] = useState<PublicKey | null>(null);

    useEffect(() => {
        const windowWithSolana = window as WindowWithSolana;
        if (windowWithSolana.solana) {
            setWalletAvailable(true);
            setProvider(windowWithSolana.solana);
        }
    }, []);

    useEffect(() => {
        provider?.on("connect", (publicKey: PublicKey) => { 
            console.log(`connect event: ${publicKey}`);
            setConnected(true); 
            setPubKey(publicKey);
        });
        provider?.on("disconnect", () => { 
            console.log("disconnect event");
            setConnected(false); 
            setPubKey(null);
        });
    }, [provider]);

    const connect: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        try {
            e.preventDefault();
            const pubkey = await provider?.connect();
            if (!pubkey) {
                throw new Error("Invalid public key");
            }
            store.dispatch(connectWallet(JSON.stringify(pubkey.publicKey)));
            console.log("Connected to Phantom wallet");
        } catch (error) {
            console.error("Could not connect phantom wallet", error);
        }
    };

    const disconnect: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        try {
            e.preventDefault();
            await provider?.disconnect();
            store.dispatch(disconnectWallet());
            console.log("Disconnected from Phantom wallet");
        } catch (error) {
            console.error("Failed to disconnect phantom wallet", error);
        }
    };

    return { user: { connected, pubKey }, walletAvailable, connect, disconnect };
};
