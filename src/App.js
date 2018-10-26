import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";
import Tiles from "./components/Tiles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Top">
          <h1>Memorize This</h1>
          <h5>Counter Button is here</h5>
        </header>
        <Tiles name="A" />
        <Tiles name="B" />
        <Tiles name="C" />
      </div>
    );
  }
}

export default App;
