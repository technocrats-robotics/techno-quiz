import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import authReducer from "../features/Auth/authSlice";
import questionReducer from "../features/Questions/questionSlice";
const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer,
        questions: questionReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
