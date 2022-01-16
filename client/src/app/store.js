import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/auth";
import authReducer from "../features/Auth/authSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
