/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_URL: string;
  }
}

declare namespace jest {
  // namespace jest {
  interface Matchers<R> {
    toHavePendingRequests(): CustomMatcherResult;
  }
  // }
}
