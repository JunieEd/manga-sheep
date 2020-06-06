import React, { useState, useRef, useEffect, useCallback } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import styled from "styled-components";
import { useSelector } from "react-redux";
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

const MenuNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: cal(var(--global-nav-height));
`;

const Toolbar = () => {
  const [autoCompValue, setAutoCompValue] = useState("");
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const backdrop = useSelector((state) => state.backdrop);
  const breakpoint = useCurrentBreakpointName();

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) {
        //if (breakpoint == "tablet") {
        setHideOnScroll(isShow);
        setAutoCompValue("");
        // }
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
        <Breakpoint mobile only>
          <HamburgerMenu />
        </Breakpoint>
        <Logo />
        <Breakpoint smallMobile up style={{ flex: "1" }}>
          <MenuList />
        </Breakpoint>
        <Search autoCompValue={autoCompValue} setAutoCompValue={setAutoCompValue} />
      </MenuNav>
    </ToolbarHeader>
  );
};

export default Toolbar;
