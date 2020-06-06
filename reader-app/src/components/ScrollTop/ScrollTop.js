import React, { useState } from "react";
import styled from "styled-components";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import * as Scroll from "react-scroll";

const DivStyled = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  background-color: #ff0000a6;
  color: white;
  border-radius: 5px;
  padding: 5px 9px;
  cursor: pointer;
`;

var scroll = Scroll.animateScroll;

const ScrollTop = () => {
  const [hideOnTop, setHideOnTop] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > -500;
      if (isShow !== hideOnTop) setHideOnTop(isShow);
    },
    [hideOnTop]
  );

  return (
    <>
      {!hideOnTop && (
        <DivStyled
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          &#129121;
        </DivStyled>
      )}
    </>
  );
};

export default ScrollTop;
