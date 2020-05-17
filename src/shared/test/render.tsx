import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { RenderResult, render as rtlRender } from "@testing-library/react";

import { createStore } from "shared/store/createStore";

export const render = (Component: ReactElement): RenderResult =>
  rtlRender(<Provider store={createStore()}>{Component}</Provider>);
