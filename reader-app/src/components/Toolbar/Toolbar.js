import React, { useState, useRef, useCallback } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { searchOptionHide } from "#src/redux/Action";
import { Breakpoint, useCurrentWidth, useCurrentBreakpointName } from "react-socks";

import HamburgerMenu from "./HamburgerMenu";
import Search from "#src/components/Search";
import Logo from "./Logo";
import MenuList from "./MenuList";

import "./style.css";

const ToolbarHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #191919;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  z-index: 2;
  transition: top 0.6s;
`;

const MenuNav = styled.nav``;

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: cal(var(--global-nav-height));
  ${"padding: 0;" /* override container class padding properties */}
`;

const Toolbar = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const backdrop = useSelector((state) => state.backdrop);
  const dispatch = useDispatch();

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) {
        setHideOnScroll(isShow);
        dispatch(searchOptionHide());
      }
    },
    [hideOnScroll]
  );

  const headerCustomStyle = {
    top: `${hideOnScroll ? "0" : "calc(var(--global-nav-height) * -1)"}`,
    zIndex: `${backdrop.isFromSearch ? 101 : 2}`,
  };

  return (
    <ToolbarHeader className="matted" style={headerCustomStyle}>
      <MenuNav>
        <ToolbarWrapper className="container">
          <Breakpoint mobile only>
            <HamburgerMenu />
          </Breakpoint>
          <Logo />
          <Breakpoint smallMobile up style={{ flex: "1" }}>
            <MenuList />
          </Breakpoint>
          <Search />
        </ToolbarWrapper>
      </MenuNav>
    </ToolbarHeader>
  );
};

export default Toolbar;
