import React from "react";
import { render } from "@testing-library/react";

import { UserInfo } from "components/UserInfo/UserInfo";
import { User } from "types/User";

describe("<UserInfo />", () => {
  const user = (overrides: Partial<User> = {}): User => ({
    address: null,
    email: "test@example.com",
    username: "test",
    name: "Test User",
    ...overrides,
  });

  it(`formats the user's name and user name`, () => {
    const { container } = render(<UserInfo user={user()} />);
    expect(container).toHaveTextContent("Test User (@test)");
  });

  it(`displays the user's email`, () => {
    const userInfo = user();
    const { container } = render(<UserInfo user={userInfo} />);

    expect(container).toHaveTextContent("Email: test@example.com");
  });

  it("includes a formatted address if available", () => {
    const userInfo = user({
      address: {
        city: "Bello",
        zipcode: "051051",
        street: "Zamora",
      },
    });

    const { container } = render(<UserInfo user={userInfo} />);
    expect(container).toHaveTextContent("Zamora, Bello [051051]");
  });

  it("uses a placeholder when address isn't available", () => {
    const { container } = render(<UserInfo user={user()} />);
    expect(container).toHaveTextContent("Address: N/A");
  });
});
