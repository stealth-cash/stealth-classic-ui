import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./modules/auth";

export const store = configureStore({
    reducer: {
        authSliceReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["auth/connect", "auth/disconnect"]
            }
        })
});