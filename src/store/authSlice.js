import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: JSON.parse(localStorage.getItem('isLogin')) || false,
    role: localStorage.getItem('role') || '', // Add role state
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isLogin = true;
            state.role = action.payload; // Set role
            localStorage.setItem('isLogin', JSON.stringify(true));
            localStorage.setItem('role', action.payload); // Save role to localStorage
        },
        logout(state) {
            state.isLogin = false;
            state.role = ''; // Clear role
            localStorage.setItem('isLogin', JSON.stringify(false));
            localStorage.removeItem('role'); // Remove role from localStorage
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;