import React from "react";

import { UsersWithState } from "pages/UsersWithState";
import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <UsersWithState />
      </header>
    </div>
  );
}

export default App;
