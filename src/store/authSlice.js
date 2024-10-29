import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            console.log('login reducer called');
            state.isLogin = true;
        },
        logout(state) {
            console.log('logout reducer called');
            state.isLogin = false;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;