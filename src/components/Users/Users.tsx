import React, { SFC } from "react";
import { List } from "semantic-ui-react";

import { User } from "types/User";
import { UserInfo } from "components/UserInfo/UserInfo";

import "./Users.css";

interface UsersProps {
  users: User[];
}

export const Users: SFC<UsersProps> = ({ users }) => {
  return (
    <List as="ul" className="Users-root">
      {users.map((user) => (
        <UserInfo key={user.username} user={user} />
      ))}
    </List>
  );
};
