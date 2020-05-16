// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import nock from "nock";
import { cleanup } from "@testing-library/react";

expect.extend({
  toHavePendingRequests(this: jest.MatcherUtils, api: nock.Scope) {
    const pass = !api.isDone();

    return {
      pass,
      message: pass
        ? () => "Expected Nock not to have pending requests"
        : () => "Expected Nock to have pending requests",
    };
  },
});

afterEach(() => {
  cleanup();
  expect(nock).not.toHavePendingRequests();
});
