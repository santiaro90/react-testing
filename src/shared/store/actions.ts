import { ThunkAction } from "redux-thunk";

import { AppState, SetUsersAction, UsersActions } from "types/AppState";
import { User } from "types/User";
import { api } from "shared/api";

export const setUsers = (users: User[]): SetUsersAction => ({
  type: UsersActions.SetUsers,
  payload: users,
});

export const getUsers = (): ThunkAction<
  void,
  AppState,
  unknown,
  SetUsersAction
> => async (dispatch) => {
  const { data } = await api.get<User[]>("/users");
  dispatch(setUsers(data || []));
};
