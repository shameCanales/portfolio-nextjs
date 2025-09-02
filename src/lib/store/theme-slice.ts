import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  theme: "dark" | "light";
}

const initialState: ThemeState = {
  theme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      const theme = action.payload;

      state.theme = theme;
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice;
