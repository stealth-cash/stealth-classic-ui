import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PublicKey } from "@solana/web3.js";

type AuthState = { connected: true; pubkey: PublicKey } | { connected: false; pubkey: null; };

const initialState: AuthState = {
    connected: false,
    pubkey: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        connectWallet(state: AuthState, action: PayloadAction<string>) {
            state.connected = true;
            state.pubkey = JSON.parse(action.payload) as PublicKey;
        },
        disconnectWallet(state: AuthState) {
            state.connected = false;
            state.pubkey = null;
        }
    }
});

export const { connectWallet, disconnectWallet } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;