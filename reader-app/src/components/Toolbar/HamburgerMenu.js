import React from "react";
import styled from "styled-components";

import Icon from "#src/components/Icon";

const toggleButtonColor = "tomato";

const HamburgerMenuContainer = styled.div`
  align-items: center;
  display: flex;
  height: var(--global-nav-height);
  justify-content: center;
  width: calc(var(--global-nav-height) + 10px);
`;

const HamburgerMenu = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

const hamburgerMenu = props => (
  <HamburgerMenuContainer>
    <HamburgerMenu className="noSelect" onClick={props.click}>
      <Icon.MenuIcon height="20" />
    </HamburgerMenu>
  </HamburgerMenuContainer>
);

export default hamburgerMenu;
