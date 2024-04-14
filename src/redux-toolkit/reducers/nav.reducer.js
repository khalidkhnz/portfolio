import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavActive: false,
};

const isNavActiveSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setNavActive: (state, action) => {
      const { setIsNavActive } = action.payload;
      state.isNavActive = setIsNavActive;
    },
  },
});

export const { setNavActive } = isNavActiveSlice.actions;
export default isNavActiveSlice.reducer;
