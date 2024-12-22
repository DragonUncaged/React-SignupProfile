import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  success: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      state.success = 'Signup successful!';
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      state.success = null;
      localStorage.removeItem('user');
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.success = null;
    },
    clearMessages: (state) => {
      state.error = null;
      state.success = null;
    },
  },
});

export const { setUser, logout, setError, clearMessages } = authSlice.actions;
export default authSlice.reducer;