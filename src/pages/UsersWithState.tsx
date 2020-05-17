import React, { SFC, useEffect, useState } from "react";

import { User } from "types/User";
import { Users } from "components/Users";
import { api } from "shared/api";

export const UsersWithState: SFC<{}> = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get<User[]>("/users").then((response) => setUsers(response.data || []));
  }, []);

  return <Users users={users} />;
};
