import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { LS_AUTHORED, LS_USER } from "../../constants";
import { LOGIN_S, LOGOUT_S } from "../../constants/reducerType";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  userData: {},
};

// Reducer
const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    loaderChange: (state, payload) => {
      state.isLoading = payload.payload;
    },
  },
  extraReducers: (builder) => {

    builder.addCase(LOGIN_S, (state, action) => {
      // // Default header for auth
      axios.defaults.headers.common['Authorization'] = action.payload.data.token;
      localStorage.setItem(LS_AUTHORED, JSON.stringify(action.payload.data.token));
      localStorage.setItem(LS_USER, JSON.stringify(action.payload.data));

      state.userData = action.payload;
      state.isLoggedIn = true;
    });

    builder.addCase(LOGOUT_S, (state, action) => {
      // // remove items on logout
      delete axios.defaults.headers.common['Authorization']
      localStorage.removeItem(LS_AUTHORED);
      localStorage.removeItem(LS_USER);
      state.userData = {};
      state.isLoggedIn = false;
    });
  },
});

export const { loaderChange } = loginSlice.actions;
export default loginSlice.reducer;
