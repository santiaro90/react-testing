import React from "react";

import { UsersWithRedux } from "pages/UsersWithRedux";
// import { UsersWithState } from "pages/UsersWithState";
import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <UsersWithRedux />
        {/* <UsersWithState /> */}
      </header>
    </div>
  );
}

export default App;
