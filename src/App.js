import React, { Component } from "react";
import Header from "./layouts/Header";
import GlobalStyle from "./Global";
import { Button, Card } from "./elements";
import styled from "styled-components/macro";

const Fake = styled.main`
  background: white;
`;

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
        <Fake>CSS FAKE </Fake>
        <main
          css={`
            background: red;
            h2 {
              font-size: 100px;
            }
          `}
        >
          <Card>
            <h2>Card Heading</h2>
            <Card.Button modifiers="cancel">Say Hello</Card.Button>
            <Card.Button>Say Hello</Card.Button>
          </Card>

          <Button modifiers="cancel">Say Hello</Button>
          <Button modifiers="small">Say Hello</Button>
          <Button modifiers={["small", "cancel"]}>Don't Say Hello</Button>
        </main>
      </div>
    );
  }
}

export default App;

// const Fake = styled.main`
//   background: red;
//   h2 {
//     font-size: 100px;
//   }
// `;
