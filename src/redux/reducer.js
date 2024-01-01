// gamesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    createNewGame: (state, action) => {
      state.games.push(action.payload);
    },
  },
});

export const { createNewGame } = gamesSlice.actions;
export default gamesSlice.reducer;
