import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "white",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload;
    },
    resetColor: (state) => {
      state.color = initialState.color;
    },
  },
});

export const { changeColor, resetColor } = colorSlice.actions;
export default colorSlice.reducer;
