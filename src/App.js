import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";

const Heading = styled.h1`
  font-size: 4rem;
`;

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  font-size: 2rem;
  border: none;
  background: ${({ type }) => (type === "cancel" ? "tomato" : "indigo")};
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button>Save</Button>
          <Heading>
            Edit <code>src/App.js</code> and save to reload.
          </Heading>
          <Button type="cancel">Cancel</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
