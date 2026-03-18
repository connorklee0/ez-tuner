import { createSlice } from "@reduxjs/toolkit";

const stringSlice = createSlice({
  name: "string",
  initialState: {
    selectedStringNum: 6,
    selectedNote: "E",
    isMuted: false,
  },
  reducers: {
    setSelectedString: (state, action) => {
      state.selectedStringNum = action.payload.stringNum;
      state.selectedNote = action.payload.note;
    },
    clearSelectedString: (state) => {
      state.selectedStringNum = null;
      state.selectedNote = null;
    },
    setMuted: (state, action) => {
      state.isMuted = action.payload;
    },
  },
});

export const { setSelectedString, clearSelectedString, setMuted } =
  stringSlice.actions;
export default stringSlice.reducer;
