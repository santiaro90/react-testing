import React from "react";
import { render } from "@testing-library/react";

import App from "App";
import { User } from "types/User";
import { mockApi } from "shared/test/mockApi";

describe("<App />", () => {
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

  it("fetches and renders a list of users", async () => {
    mockApi().get("/users").reply(200, users);

    const { findByText } = render(<App />);

    await findByText("User 1 (@user1)");
    await findByText("User 2 (@user2)");
  });
});
