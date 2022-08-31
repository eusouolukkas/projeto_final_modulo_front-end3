import { combineReducers } from "@reduxjs/toolkit";

import user from "./user/UserSlice";

export default combineReducers({
  user,
});
