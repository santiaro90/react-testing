import React from "react";

import { UsersWithState } from "pages/UsersWithState";
import logo from "./logo.svg";

import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <UsersWithState />
  </div>
);

export default App;
