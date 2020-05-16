import React from "react";
import { render } from "@testing-library/react";

import { User } from "types/User";
import { Users } from "components/Users/Users";

describe("<Users />", () => {
  const users: User[] = [
    {
      name: "User 1",
      email: "user1@example.com",
      username: "user1",
      address: null,
    },
    {
      name: "User 2",
      email: "user2@example.com",
      username: "user2",
      address: null,
    },
  ];

  it("renders a list of users", () => {
    const { container } = render(<Users users={users} />);

    expect(container).toHaveTextContent(users[0].name);
    expect(container).toHaveTextContent(users[0].email);

    expect(container).toHaveTextContent(users[1].name);
    expect(container).toHaveTextContent(users[1].email);
  });
});
