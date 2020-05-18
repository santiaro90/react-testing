import { createSlice } from "@reduxjs/toolkit";

import {
  AppThunk,
  GetUsersAction,
  SetUsersAction,
  UsersState,
} from "types/AppState";
import { User } from "types/User";
import { api } from "shared/api";

export const usersStore = createSlice({
  name: "users",
  initialState: [] as UsersState,
  reducers: {
    setUsers: (_, action: SetUsersAction) => action.payload,
  },
});

const { setUsers } = usersStore.actions;

export const getUsers = (): AppThunk<GetUsersAction> => async (dispatch) => {
  const response = await api.get<User[]>("/users");
  return dispatch(setUsers(response.data || []));
};
