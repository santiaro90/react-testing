import nock, { Scope } from "nock";

export const mockApi = (): Scope =>
  nock(process.env.REACT_APP_API_URL).defaultReplyHeaders({
    "access-control-allow-origin": "*",
  });
