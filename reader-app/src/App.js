import React, { useCallback, useState, useRef, useEffect } from "react";
import { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import styled from "styled-components";

import "./App.css";

import Backdrop from "#src/components/Backdrop";
import SideDrawer from "#src/components/SideDrawer";
import Toolbar from "#src/components/Toolbar";

import Default from "#src/pages/Default/Default";
import Home from "#src/pages/Home";
import MangaChapter from "#src/pages/MangaChapter/MangaChapter";
import MangaDetails from "#src/pages/MangaDetails";
import MangaList from "#src/pages/MangaList";

import { Switch, Route } from "react-router-dom";

setDefaultBreakpoints([{ mobile: 0 }, { smallMobile: 576 }, { tablet: 768 }]);

const Main = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: calc(var(--global-nav-height) + 5px);
  width: 100%;
`;

const AppContainer = styled.div`
  background-color: #222;
`;

const App = () => {
  return (
    <BreakpointProvider>
      <AppContainer>
        <Toolbar />
        <SideDrawer />
        <Backdrop />
        <Main className="matted">
          <Switch>
            <Route
              component={MangaChapter}
              path="/:mangaId([a-z0-9]{24})-:mangaName([a-z0-9-]+)/:chapterId([a-z0-9]{24})"
            />
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/:mangaId([a-z0-9]{24})-:mangaName([a-z0-9-]+)" component={MangaDetails} />
            <Route path="/mangalist" component={MangaList} />
            <Route component={Default} />
          </Switch>
        </Main>
      </AppContainer>
    </BreakpointProvider>
  );
};

export default App;
