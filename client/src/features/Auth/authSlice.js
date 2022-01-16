import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import authService from "../../services/auth.service";
import {setUser} from "../User/userSlice"
const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
    "auth/register",
    async ({name, email, password}, thunkAPI) =>{
        try{
            const response = await authService.register(name, email, password);
            thunkAPI.dispatch(setUser(response.data.user));
            return response.data;
        }
        catch(error){
            console.log("ERROR at Thunk");
            
        }
    }
)