import React, { SFC } from "react";
import { List, Icon } from "semantic-ui-react";

import { User } from "types/User";

import "./UserInfo.css";

interface UserInfoProps {
  user: User;
}

export const UserInfo: SFC<UserInfoProps> = ({ user }) => {
  const address = user.address
    ? `${user.address.street}, ${user.address.city} [${user.address.zipcode}]`
    : "N/A";

  return (
    <List.Item as="li" className="UserInfo">
      <Icon className="UserInfo-icon" name="user circle" size="big" />
      <List.Content className="UserInfo-content">
        <List.Header>
          {user.name} (@{user.username})
        </List.Header>

        <List.Description>Address: {address}</List.Description>

        <List.Description>Email: {user.email}</List.Description>
      </List.Content>
    </List.Item>
  );
};
