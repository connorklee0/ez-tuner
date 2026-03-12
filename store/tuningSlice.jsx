import { createSlice } from "@reduxjs/toolkit";

const tuningSlice = createSlice({
  name: "tuning",
  initialState: {
    selectedKey: "standard",
  },
  reducers: {
    setTuning: (state, action) => {
      state.selectedKey = action.payload;
    },
  },
});

export const { setTuning } = tuningSlice.actions;
export default tuningSlice.reducer;
