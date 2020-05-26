import React from "react";
import userEvent from "@testing-library/user-event";
import { render, wait } from "@testing-library/react";

import { UserSearch } from "../UserSearch";

describe("<UserSearch />", () => {
  it("sends characters typed by the user", async () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(<UserSearch onChange={onChange} />);

    const input = getByPlaceholderText("Search...");

    await userEvent.type(input, "abc");
    await wait(() => expect(onChange).toHaveBeenCalledWith("abc"));
  });

  it("sends characters once if user types slow", async () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(<UserSearch onChange={onChange} />);

    const input = getByPlaceholderText("Search...");

    await userEvent.type(input, "abc");
    await wait(() => expect(onChange).toHaveBeenCalledTimes(1));
  });
});
