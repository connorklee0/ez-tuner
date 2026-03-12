import { createSlice } from "@reduxjs/toolkit";

const guitarSlice = createSlice({
  name: "guitar",
  initialState: {
    selectedStyle: "3 + 3",
    isGuitarCardOpen: true,
    isTuningCardOpen: true,
  },
  reducers: {
    setGuitarStyle: (state, action) => {
      state.selectedStyle = action.payload;
    },
    setGuitarCardOpen: (state, action) => {
      state.isGuitarCardOpen = action.payload;
    },
    setTuningCardOpen: (state, action) => {
      state.isTuningCardOpen = action.payload;
    },
  },
});

export const { setGuitarStyle, setGuitarCardOpen, setTuningCardOpen } =
  guitarSlice.actions;
export default guitarSlice.reducer;
