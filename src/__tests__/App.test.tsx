import React from "react";
import nock from "nock";
import { render } from "@testing-library/react";

import App from "App";
import { User } from "types/User";

const api = nock(process.env.REACT_APP_API_URL);

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
    api.get("/users").reply(200, users);

    const { findByText } = render(<App />);

    await findByText(users[0].name);
    await findByText(users[1].name);
  });
});
