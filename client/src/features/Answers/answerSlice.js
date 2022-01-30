import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    answers: null,
}

const questionsSlice = createSlice({
    name: "answers",
    initialState,
    reducers: {
        addAnswers(state, action){
            state.answers = action.payload;
        },
        removeQuestions(state){
            state.questions = null;
        }
    }
})

export const {setQuestions, removeQuestions} = questionsSlice.actions;
export default questionsSlice.reducer;

export const selectQuestions = (state) => state.questions.questions;
