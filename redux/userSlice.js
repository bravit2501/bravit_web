import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  isLoggedIn: false,
  userData: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState: intialState,
  reducers: {
    userLogginSuccess(state, action) {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    userLogoutSuccess(state, action) {
      state.isLoggedIn = false;
      state.userData = {};
    },
  },
  extraReducers: {},
});

export const { userLogginSuccess, userLogoutSuccess } = userSlice.actions;
export default userSlice.reducer;
