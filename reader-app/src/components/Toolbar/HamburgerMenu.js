import React from "react";
import styled from "styled-components";

import { MenuIcon } from "#src/components/Icon";

import { useDispatch } from "react-redux";
import { menuDrawerShow, backdropShow } from "#src/redux/Action";

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

const hamburgerMenu = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(menuDrawerShow());
    dispatch(backdropShow());
  };

  return (
    <HamburgerMenuContainer>
      <HamburgerMenu className="noSelect" onClick={clickHandler}>
        <MenuIcon height="20" />
      </HamburgerMenu>
    </HamburgerMenuContainer>
  );
};

export default hamburgerMenu;
