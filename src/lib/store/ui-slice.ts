import { createSlice } from "@reduxjs/toolkit";

interface initialUiState {
  mobileNavIsOpen: boolean;
}

const initialState: initialUiState = {
  mobileNavIsOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileNav: (state) => {
      state.mobileNavIsOpen = !state.mobileNavIsOpen;
    },
    hideMobileNav: (state) => {
      state.mobileNavIsOpen = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
