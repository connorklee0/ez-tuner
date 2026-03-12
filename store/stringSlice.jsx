import { createSlice } from "@reduxjs/toolkit";

const stringSlice = createSlice({
  name: "string",
  initialState: {
    selectedStringNum: 6,
    selectedNote: "E",
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
  },
});

export const { setSelectedString, clearSelectedString } = stringSlice.actions;
export default stringSlice.reducer;
