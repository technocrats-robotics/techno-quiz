import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    answers: new Map(),
};

const answerSlice = createSlice({
    name: "answers",
    initialState,
    reducers: {
        addAnswers(state, action) {
            state.answers = action.payload;
        },
        removeAnswers(state) {
            state.answers = null;
        },
    },
});

export const { addAnswers, removeAnswers } = answerSlice.actions;
export default answerSlice.reducer;

export const selectAnswers = (state) => state.answers.answers;
