import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { User } from "./User";

export type UsersState = User[];

export interface AppState {
  readonly users: UsersState;
}

export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;
