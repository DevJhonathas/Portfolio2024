import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice"
import photoReducer from "./slices/photoSlice" 

export const store = configureStore({
    reducer: {
        auth: authReducer,
        photo: photoReducer
    },
});
