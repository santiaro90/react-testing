import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, UsersState } from "types/AppState";
import { User } from "types/User";
import { api } from "shared/api";

export const usersStore = createSlice({
  name: "users",
  initialState: [] as UsersState,
  reducers: {
    setUsers: (_, action: PayloadAction<User[]>) => action.payload,
  },
});

const { setUsers } = usersStore.actions;

export const getUsers = (): AppThunk => async (dispatch) => {
  const response = await api.get<User[]>("/users");
  dispatch(setUsers(response.data || []));
};
