import { createSlice } from "@reduxjs/toolkit";

const usersFromStorage = JSON.parse(localStorage.getItem("users")) || [];
const currentUserFromStorage = JSON.parse(localStorage.getItem("currentUser")) || null;
const userRoleFromStorage = localStorage.getItem("userRole") || null;

const initialState = {
  users: usersFromStorage,
  currentUser: currentUserFromStorage,
  justLoggedIn: false,
  userRole: userRoleFromStorage,
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
        state.justLoggedIn = true;
      }
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
      state.justLoggedIn = false;
      state.userRole = null;
      localStorage.removeItem("userRole");
    },
    resetJustLoggedIn: (state) => {
      state.justLoggedIn = false;
    },
    setUserRole: (state, action) => {
      state.userRole = action.payload;
      localStorage.setItem("userRole", action.payload); // persist role
    },

  },
});

export const { register, login, logout, resetJustLoggedIn, setUserRole } = authSlice.actions;
export default authSlice.reducer;