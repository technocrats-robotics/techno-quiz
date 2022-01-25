import {createSlice} from "@reduxjs/toolkit";

const intialState = {
    user: null,
    isLoggedIn: false,
    isVerified: false,
}
const userSlice = createSlice({
    name: "user",
    intialState,
    reducers: {
        setUser(state, action){
           state.user = action.payload;
           state.isLoggedIn = true;
           state.isVerified = action.payload.isVerified; 
        },
        deleteUser(state){
            state.user=null;
            state.isLoggedIn=false;
            state.isVerified=false;
        }
    }
});

export const {setUser, deleteUser} = userSlice.actions;
export default userReducer = userSlice.reducer;