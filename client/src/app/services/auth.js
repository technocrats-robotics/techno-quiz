import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../../services/config/server";
export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            if (token) {
                headers.set("auth-token", `${token}`);
            }
            headers.set("Access-Control-Allow-Origin", "*");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/api/auth/login",
                method: "POST",
                body: credentials,
            }),
        }),
        protected: builder.mutation({
            query: () => "protected",
        }),
    }),
});

export const { useLoginMutation, useProtectedMutation } = api;
