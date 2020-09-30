import { createReducer } from "@reduxjs/toolkit";
import { CHANGE_THEME } from "../actions/global";

export const initialState = {
  theme: "dark"
};

const global = createReducer(initialState, {
  [CHANGE_THEME]: (state, { payload }) => {
    state.theme = payload;
  }
});

export default global;
