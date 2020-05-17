import { Reducer } from "react";
import { combineReducers } from "redux";

import { UsersActions, UsersState, SetUsersAction } from "types/AppState";

const usersReducer: Reducer<UsersState, SetUsersAction> = (
  state = [],
  action
) => {
  if (action.type === UsersActions.SetUsers) {
    return action.payload;
  }

  return state;
};

export const rootReducer = combineReducers({
  users: usersReducer,
});
