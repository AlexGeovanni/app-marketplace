
import { createSlice } from "@reduxjs/toolkit";


export const AuthUser = createSlice({
    name: 'authUser',
    initialState: {
        isLoggedIn: false,
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        }
    }
})


export const { login, logout } = AuthUser.actions;

export default AuthUser.reducer;