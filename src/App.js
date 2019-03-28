import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";

import GlobalStyle from "./Global";
import { Heading, Button, CancelButton } from "./elements";

// const above = Object.keys(size).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${size[label]}px) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});

/*const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {}); */

const Fake = ({ className }) => (
  <div className={className}>
    <h2>I'm a fake component</h2>
  </div>
);

// CSS Helper
// Needed for props in mixins
// const fixedTop = `
//   position: fixed;
//   top: ${({ top }) => top + 'px'};
//   left: 0;
// `;

//const color = "white"; //variable example

const AppWrapper = styled.div`
  header {
    background: teal;
  }
  ${Button} {
    margin-bottom: 4rem;
  }
`;

const DoubleFake = styled(Fake)`
  h2 {
    color: red;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button>Save</Button>
          <DoubleFake />
          <Fake />
          <Heading>
            Edit <code>src/App.js</code> and save to reload.
          </Heading>
          <CancelButton top="100">Cancel</CancelButton>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

export default App;
