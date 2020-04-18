import React from "react";
import { Link } from "react-router-dom";

import HamburgerMenu from "./HamburgerMenu";
import Search from "#src/components/Search";
import Logo from "./Logo";
import styled from "styled-components";

import { useSelector } from "react-redux";

//Styled Components
const ToolbarHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--main-toolbar-color);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  z-index: 1;
`;

const MenuNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: cal(var(--global-nav-height));

  @media only screen and (min-width: 768px) {
    padding: 0 20px;
    display: block;
  }
`;

const HamburgerContainer = styled.div`
  height: cal(var(--global-nav-height));

  @media only screen and (min-width: 768px) {
    display: none !important;
  }
`;

const LogoContainer = styled.div`
  height: cal(var(--global-nav-height));

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

const BottomLine = styled.div`
  width: 100%;
  height: 5px;
  background-color: var(--global-red-color);
`;

const Toolbar = () => {
  const backdrop = useSelector(state => state.backdrop);

  return (
    <ToolbarHeader style={{ zIndex: `${backdrop.isFromSearch ? 101 : 1}` }}>
      <MenuNav>
        <HamburgerContainer>
          <HamburgerMenu />
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
      <BottomLine />
    </ToolbarHeader>
  );
};

export default Toolbar;
