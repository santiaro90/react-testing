import { combineReducers } from "redux";

import { usersStore } from "./users";

export const rootReducer = combineReducers({
  users: usersStore.reducer,
});
