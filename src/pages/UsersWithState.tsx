import React, { SFC, useEffect, useState } from "react";

import { User } from "types/User";
import { UserSearch } from "components/UserSearch";
import { Users } from "components/Users";
import { api } from "shared/api";

export const UsersWithState: SFC<{}> = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState<string>("");

  const filterUsers = (): User[] =>
    users.filter((user) => user.name.startsWith(query));

  useEffect(() => {
    api.get<User[]>("/users").then((response) => setUsers(response.data || []));
  }, []);

  return (
    <>
      <UserSearch onChange={setQuery} />
      <Users users={filterUsers()} />
    </>
  );
};
