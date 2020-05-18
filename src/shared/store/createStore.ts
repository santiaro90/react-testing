import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

export const createStore = () => configureStore({ reducer: rootReducer });
