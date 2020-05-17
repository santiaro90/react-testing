import React, { useEffect, useState } from "react";

import { Users } from "components/Users/Users";
import { User } from "types/User";
import { api } from "shared/api";

export const UsersWithState = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get<User[]>("/users").then((response) => setUsers(response.data));
  }, []);

  return <Users users={users} />;
};
