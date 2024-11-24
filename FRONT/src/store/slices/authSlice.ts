// src/store/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  
}

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload); // Sauvegarde le token dans localStorage
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token'); // Retirer le token de localStorage lors de la déconnexion
    },
  },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;