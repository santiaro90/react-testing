import { configureStore, Store } from "@reduxjs/toolkit";

import { AppState } from "types/AppState";
import { rootReducer } from "./rootReducer";

export const createStore = (): Store<AppState> =>
  configureStore({ reducer: rootReducer });
