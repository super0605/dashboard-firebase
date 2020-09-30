import { combineReducers } from "redux";
import global from "./global";
import ui from "./ui";
import login from "./login";

const appReducer = combineReducers({
  global,
  ui,
  login,
});

export default appReducer;
