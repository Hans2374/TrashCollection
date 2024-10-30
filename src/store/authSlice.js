import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: JSON.parse(localStorage.getItem('isLogin')) || false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isLogin = true;
            localStorage.setItem('isLogin', JSON.stringify(true));
        },
        logout(state) {
            state.isLogin = false;
            localStorage.setItem('isLogin', JSON.stringify(false));
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;