import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService"

const initialState = {
    user: {},
    error: false,
    success: false,
    loading: false,
    message: null,
}

//Get user details
export const getUserDetails = createAsyncThunk(
    "user/get", 
    async(id) => {
        const data = await userService.getUserDetails(id);

        return data;
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null;
        },
    },
    extraReducers:  (builder) => {
        builder.addCase(getUserDetails.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(getUserDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.user = action.payload;
        })
    }
})

export default userSlice.reducer;