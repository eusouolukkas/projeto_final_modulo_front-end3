import { combineReducers } from "@reduxjs/toolkit";

import user from "./user/UserSlice";
import tasks from "./tasks/TasksSlice";

export default combineReducers({
  user,
  tasks,
});
