import thunk from "redux-thunk";
import { applyMiddleware, createStore as createReduxStore, Store } from "redux";

import { AppState } from "types/AppState";
import { rootReducer } from "./reducer";

export const createStore = (): Store<AppState> =>
  createReduxStore(rootReducer, applyMiddleware(thunk));
