import { createSlice } from "@reduxjs/toolkit";

const usersFromStorage = JSON.parse(localStorage.getItem("users")) || [];

const initialState = {
  users: usersFromStorage,
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    login: (state, action) => {
      const user = state.users.find(
        (u) => u.email === action.payload.email && u.password === action.payload.password
      );
      if (user) {
        state.currentUser = user;
        localStorage.setItem("currentUser", JSON.stringify(user));
      }
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;