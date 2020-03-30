import React from "react";
import { Link } from "react-router-dom";

import HamburgerMenu from "./HamburgerMenu";
import Search from "#src/components/Search";
import Logo from "./Logo";
import styled from "styled-components";

//Styled Components
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

const MenuNav = styled.nav`
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    padding: 0 20px;
    display: block;
  }
`;

const HamburgerContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: none !important;
  }
`;

const LogoContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: inline-block;
    vertical-align: top;
  }
`;

const SearchContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: inline-block;
    vertical-align: top;
    float: right;
  }
`;

const MenuList = styled.ul`
  display: none;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    height: var(--global-nav-height);
    list-style: none;
    vertical-align: top;
  }
`;

const MenuList_Items = styled.li`
  @media only screen and (min-width: 768px) {
    align-items: center;
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;

    > a {
      color: red;
      font-weight: 550;
      font-size: 1.1rem;
      line-height: var(--global-nav-height);

      :hover {
        color: black;
      }
    }
  }
`;

const Spacer = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    height: var(--global-nav-height);
    vertical-align: top;
    width: 30px;
  }
`;

const BottomNav = styled.div`
  width: 100%;
  height: 7px;
  background-color: red;
`;

const Toolbar = ({ drawerClickHandler }) => {
  return (
    <ToolbarHeader>
      <MenuNav>
        <HamburgerContainer>
          <HamburgerMenu click={drawerClickHandler} />
        </HamburgerContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Spacer />
        <MenuList>
          <MenuList_Items>
            <Link to="/">Home</Link>
          </MenuList_Items>
          <MenuList_Items>
            <Link to="/mangalist">Manga List</Link>
          </MenuList_Items>
        </MenuList>
        <SearchContainer>
          <Search />
        </SearchContainer>
      </MenuNav>
      <BottomNav />
    </ToolbarHeader>
  );
};

export default Toolbar;
