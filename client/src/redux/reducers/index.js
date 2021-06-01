import { combineReducers } from "redux";
import user from "./userReducer";
import events from './eventReducer'

export default combineReducers({
  user,
  events,
});
