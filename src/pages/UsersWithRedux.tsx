import React, { SFC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "types/AppState";
import { User } from "types/User";
import { Users } from "components/Users";
import { getUsers } from "shared/store/actions";

export const UsersWithRedux: SFC<{}> = () => {
  const dispatch = useDispatch();
  const users = useSelector<AppState, User[]>((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <Users users={users} />;
};
