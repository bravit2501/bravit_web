import { createSlice } from "@reduxjs/toolkit";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const NONE = "NONE";

const intialState = {
  showThisAuthModal: NONE,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: intialState,
  reducers: {
    setShowThisAuthModal(state, action) {
      state.showThisAuthModal = action.payload;
    },
  },
  extraReducers: {},
});

export const { setShowThisAuthModal } = uiSlice.actions;
export default uiSlice.reducer;
