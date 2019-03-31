import React, { Component } from "react";
import Header from "./layouts/Header";
import GlobalStyle from "./Global";
import { Button, CancelButton } from "./elements";

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

// CSS Helper
// Needed for props in mixins
// const fixedTop = `
//   position: fixed;
//   top: ${({ top }) => top + 'px'};
//   left: 0;
// `;

//const color = "white"; //variable example

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GlobalStyle />
        <Button>Say Hello</Button>
        <Button type="cancel">Say Hello</Button>
        <CancelButton>Don't Say Hello</CancelButton>
        <Button size="small">Say Hello</Button>
        <CancelButton size="small">Don't Say Hello</CancelButton>
      </div>
    );
  }
}

export default App;
