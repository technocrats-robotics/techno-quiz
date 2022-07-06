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
        getAvailableQuestions: builder.query({
            query: (department) => ({
                url: `/api/question/all/${department}`,
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
        getAvailableQuiz: builder.query({
            query: () => ({
                url: "/api/quiz",
                method: "GET",
            }),
        }),
        getAllQuiz: builder.query({
            query: (department) => ({
                url: `/api/quiz/all/${department}`,
                method: "GET",
            }),
        }),
        addQuiz: builder.mutation({
            query: (body) => ({
                url: "/api/quiz",
                method: "POST",
                body,
            }),
        }),
        publishQuiz: builder.mutation({
            query: (body) => ({
                url: "/api/quiz/publish",
                method: "PUT",
                body,
            }),
        }),
        evaluateQuiz: builder.mutation({
            query: (quizId) => ({
                url: `/api/test/evaluate/${quizId}`,
                method: "PUT",
            }),
        }),
        includeQues: builder.mutation({
            query: (body) => ({
                url: `/api/quiz/include/${body.quizId}/${body.quesId}`,
                method: "PUT",
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
    useAddQuestionMutation,
    useGetAvailableQuizQuery,
    useGetAllQuizQuery,
    useGetAvailableQuestionsQuery,
    useAddQuizMutation,
    usePublishQuizMutation,
    useEvaluateQuizMutation,
    useIncludeQuesMutation,
} = api;
