import React, { Component } from "react";
import Board from "./Board";
import "./App.css";

/** App component loads the board */

class App extends Component {
  render() {
    return (
      <div className='App' data-test="App">
        <Board />
      </div>
    );
  }
}

export default App;
