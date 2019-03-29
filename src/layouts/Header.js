import React from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import { purple, elevation } from "../utilities";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <img src={logo} alt="logo" className="logo" />
    </header>
  );
};

export default styled(Header)`
  background: ${purple};
  padding: 10px 5%;
  ${elevation[2]};
  .logo {
    width: 60px;
  }
`;
