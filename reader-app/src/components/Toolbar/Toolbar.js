import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Breakpoint } from "react-socks";

import HamburgerMenu from "./HamburgerMenu";
import Search from "#src/components/Search";
import Logo from "./Logo";
import MenuList from "./MenuList";

const ToolbarHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  z-index: 2;
`;

const MenuNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: cal(var(--global-nav-height));
`;

const BottomLine = styled.div`
  width: 100%;
  height: 5px;
  ${"" /* background: rgb(46, 4, 4); */}
  ${"" /* background: linear-gradient(90deg, rgba(46, 4, 4, 1) 0%, rgba(255, 52, 52, 1) 43%); */}
  background-color: red;
`;

const Toolbar = () => {
  const backdrop = useSelector(state => state.backdrop);

  return (
    <ToolbarHeader className="matted-white" style={{ zIndex: `${backdrop.isFromSearch ? 101 : 2}` }}>
      <MenuNav>
        <Breakpoint mobile only>
          <HamburgerMenu />
        </Breakpoint>
        <Logo />
        <Breakpoint smallMobile up style={{ flex: "1" }}>
          <MenuList />
        </Breakpoint>
        <Search />
      </MenuNav>
      <BottomLine />
    </ToolbarHeader>
  );
};

export default Toolbar;
