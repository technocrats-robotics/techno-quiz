import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../../services/config/server";
export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("token");
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
        register: builder.mutation({
            query: (credentials) => ({
                url: "/api/auth/register",
                method: "POST",
                body: credentials,
            }),
        }),
        protected: builder.mutation({
            query: () => "protected",
        }),
        getQuestionsById: builder.query({
            query: (quizId) => ({
                url: `/api/quiz/questions/${quizId}`,
                method: "GET",
            }),
        }),
        uploadAnswers: builder.mutation({
            query: (body) => ({
                url: `/api/test/answer`,
                method: "POST",
                body,
            }),
        }),
        getLeaderBoard: builder.query({
            query: (quizId) => ({
                url: `/api/test/leaderboard/${quizId}`,
                method: "GET",
            }),
        }),
        addQuestion: builder.mutation({
            query: (body) => ({
                url: `/api/question`,
                method: "POST",
                body,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useProtectedMutation,
    useGetQuestionsByIdQuery,
    useRegisterMutation,
    useUploadAnswersMutation,
    useGetLeaderBoardQuery,
    useAddQuestionMutation
} = api;
