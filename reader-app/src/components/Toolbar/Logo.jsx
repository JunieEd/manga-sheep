import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "#src/components/SVG/LogoIcon";
import LogoWordIcon from "#src/components/SVG/LogoWordIcon";

import styled from "styled-components";

const MainLogoContainer = styled.div`
  height: var(--global-nav-height);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const LogoContainer = styled(LogoIcon)`
  @media only screen and (min-width: 768px) {
    display: none !important;
  }
`;

const LogoWordContainer = styled(LogoWordIcon)`
  @media only screen and (max-width: 767px) {
    display: none !important;
  }
`;

const Logo = () => (
  <MainLogoContainer>
    <Link to="/home">
      <LogoContainer height="30" />
      <LogoWordContainer height="30" />
    </Link>
  </MainLogoContainer>
);

export default Logo;
