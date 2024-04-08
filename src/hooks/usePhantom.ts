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

const getPubkey = (): PublicKey | null => localStorage.getItem("stealth:user-pubkey") 
    ? JSON.parse(localStorage.getItem("stealth:user-pubkey") as string)
    : null;

export const usePhantom = () => {
    const [walletAvailable, setWalletAvailable] = useState(false);
    const [provider, setProvider] = useState<PhantomProvider | null>(null);
    const [connected, setConnected] = useState(getPubkey() !== null);
    const [pubkey, setPubKey] = useState<PublicKey | null>(getPubkey());

    const handleConnect = (publicKey: PublicKey) => {
        setConnected(true); 
        setPubKey(publicKey);
        store.dispatch(connectWallet(JSON.stringify(publicKey)));
        localStorage.setItem("stealth:user-pubkey", JSON.stringify(publicKey));
    }

    const handleDisconnect = () => {
        setConnected(false);
        setPubKey(null);
        store.dispatch(disconnectWallet());
        localStorage.removeItem("stealth:user-pubkey");
    }

    useEffect(() => {
        const windowWithSolana = window as WindowWithSolana;
        if (windowWithSolana.solana) {
            setWalletAvailable(true);
            setProvider(windowWithSolana.solana);
        }
    }, []);

    useEffect(() => {
        provider?.on("connect", handleConnect);
        provider?.on("disconnect", handleDisconnect);
    }, [provider]);

    const connect: React.MouseEventHandler<HTMLElement> = async (e) => {
        try {
            e.preventDefault();
            const pubkey = await provider?.connect();
            if (!pubkey) {
                throw new Error("Invalid public key");
            }
            handleConnect(pubkey.publicKey);
            console.log("Connected to Phantom wallet");
        } catch (error) {
            console.error("Could not connect phantom wallet", error);
        }
    };

    const disconnect: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        try {
            e.preventDefault();
            await provider?.disconnect();
            handleDisconnect();
            console.log("Disconnected from Phantom wallet");
        } catch (error) {
            console.error("Failed to disconnect phantom wallet", error);
        }
    };

    return { 
        user: { connected, pubkey },
        walletAvailable,
        connect,
        disconnect 
    };
};
