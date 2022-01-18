import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    questions: null,
}

const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        setQuestions(state, action){
            state.questions = action.payload;
        },
        removeQuestions(state){
            state.questions = null;
        }
    }
})

export const {setQuestions, removeQuestions} = questionsSlice.actions;
export default questionsSlice.reducer;

export const selectQuestions = (state) => state.questions.questions;
