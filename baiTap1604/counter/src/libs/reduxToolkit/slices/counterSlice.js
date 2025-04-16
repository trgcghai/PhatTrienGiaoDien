import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "toolkitCounter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Export actions and reducer
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
