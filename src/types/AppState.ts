import { User } from "./User";
import { Action } from "redux";

export type UsersState = User[];

export enum UsersActions {
  SetUsers = "SET_USERS",
}

export interface SetUsersAction extends Action<UsersActions.SetUsers> {
  payload: User[];
}

export interface AppState {
  readonly users: UsersState;
}
