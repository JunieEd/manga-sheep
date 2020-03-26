import React from "react";
import { Link } from "react-router-dom";

import HamburgerMenu from "./HamburgerMenu";
import Search from "./Search";
import Logo from "./Logo";
import styled from "styled-components";

const IPAD_WIDTH = "768px";

const ToolbarHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--main-toolbar-color);
  box-shadow: 0px 0px 10px rgb(78, 78, 78);
  height: var(--global-nav-height);
  z-index: 1;
`;

const MenuDiv = styled.div`
  position: relative;

  @media only screen and (min-width: ${IPAD_WIDTH}) {
    padding: 0 20px;
  }
`;

const MenuNav = styled.nav`
  @media only screen and (min-width: ${IPAD_WIDTH}) {
    padding: 0 20px;
  }
`;

const MenuList = styled.ul`
  display: block;
  height: 100%;
  list-style: none;
  width: 100%;
  vertical-align: middle;

  > li {
    display: inline-block;
    align-items: center;
    position: absolute;
    top: 0;
  }
`;

const MenuList_HamburgerMenu = styled.li`
  left: 0;

  @media only screen and (min-width: ${IPAD_WIDTH}) {
    display: none !important;
  }
`;

const MenuList_Logo = styled.li`
  left: 50%;
  margin-left: -24px;

  @media only screen and (min-width: ${IPAD_WIDTH}) {
    left: 0;
    margin-left: 0;
  }
`;

const MenuList_Search = styled.li`
  right: 0;
`;

const Toolbar = ({ drawerClickHandler }) => {
  return (
    <ToolbarHeader>
      <MenuDiv>
        <MenuNav>
          <MenuList>
            <MenuList_HamburgerMenu>
              <HamburgerMenu click={drawerClickHandler} />
            </MenuList_HamburgerMenu>
            <MenuList_Logo>
              <Logo />
            </MenuList_Logo>
            <MenuList_Search>
              <Search placeHolder="Search manga" />
            </MenuList_Search>
          </MenuList>
        </MenuNav>
      </MenuDiv>
    </ToolbarHeader>
  );
};

export default Toolbar;
