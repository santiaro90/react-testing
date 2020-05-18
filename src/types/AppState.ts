import { Action } from "redux";
import { PayloadAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import { User } from "./User";

export type UsersState = User[];
export type SetUsersAction = PayloadAction<User[]>;
export type GetUsersAction = Promise<SetUsersAction>;

export interface AppState {
  readonly users: UsersState;
}

export type AppThunk<T = void> = ThunkAction<
  T,
  AppState,
  unknown,
  Action<string>
>;
