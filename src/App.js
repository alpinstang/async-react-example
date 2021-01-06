import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningOfLife: 42,
    };
  }

  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return { meaningOfLife: prevState.meaningOfLife + prevProps.increment };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.meaningOfLife}</p>
          <button onClick={() => this.handleClick()} text="CHANGE ME">
            Click Me
          </button>
        </header>
      </div>
    );
  }
}

export default App;
