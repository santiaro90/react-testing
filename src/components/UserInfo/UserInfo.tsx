import React, { SFC } from "react";

import { User } from "types/User";

interface UserInfoProps {
  user: User;
}

export const UserInfo: SFC<UserInfoProps> = ({ user }) => {
  const address = user.address
    ? `${user.address.street}, ${user.address.city} [${user.address.zipcode}]`
    : "N/A";

  return (
    <li>
      <p>
        {user.name} (@{user.username})
      </p>

      <p>Address: {address}</p>
      <p>Email: {user.email}</p>
    </li>
  );
};
