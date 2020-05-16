import React, { SFC } from "react";

import { User } from "types/User";
import { UserInfo } from "components/UserInfo/UserInfo";

interface UsersProps {
  users: User[];
}

export const Users: SFC<UsersProps> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <UserInfo key={user.username} user={user} />
      ))}
    </ul>
  );
};
