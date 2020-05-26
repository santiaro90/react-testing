import React from "react";
import userEvent from "@testing-library/user-event";
import { render, wait } from "@testing-library/react";

import App from "App";
import { User } from "types/User";
import { mockApi } from "shared/test/mockApi";

describe("<App />", () => {
  const users: User[] = [
    {
      name: "Steve",
      email: "steve@example.com",
      username: "steve",
      address: null,
    },
    {
      name: "Tony",
      email: "tony@example.com",
      username: "tony",
      address: null,
    },
    {
      name: "Sam",
      email: "sam@example.com",
      username: "sam",
      address: null,
    },
    {
      name: "Santiago",
      email: "santiago@example.com",
      username: "santiago",
      address: null,
    },
  ];

  it("fetches and renders a list of users", async () => {
    mockApi().get("/users").reply(200, users);

    const { findByText } = render(<App />);

    await findByText("Steve (@steve)");
    await findByText("Tony (@tony)");
    await findByText("Sam (@sam)");
    await findByText("Santiago (@santiago)");
  });

  it("filters users by name", async () => {
    mockApi().get("/users").reply(200, users);

    const { queryByText, findByText, getByPlaceholderText } = render(<App />);
    await findByText("Steve (@steve)");

    const searchBox = getByPlaceholderText("Search...");
    await userEvent.type(searchBox, "To");

    await wait(() => {
      expect(queryByText("Tony (@tony)")).toBeInTheDocument();
      expect(queryByText("Santiago (@santiago)")).not.toBeInTheDocument();
    });
  });
});
