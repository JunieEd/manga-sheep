import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon, LogoWordIcon } from "#src/components/Icon";
import { Breakpoint } from "react-socks";

import styled from "styled-components";

const MainLogoContainer = styled.div`
  height: var(--global-nav-height);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 20px;
`;

const Logo = () => (
  <MainLogoContainer>
    <Link to="/">
      <Breakpoint mobile only>
        <LogoIcon height="30" />
      </Breakpoint>
      <Breakpoint smallMobile up>
        <LogoWordIcon height="30" />
      </Breakpoint>
    </Link>
  </MainLogoContainer>
);

export default Logo;
