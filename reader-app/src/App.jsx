import React, { useCallback, useState, useRef, useEffect } from "react";

import "./App.css";

import Backdrop from "#src/components/Backdrop/Backdrop";
import SideDrawer from "#src/components/SideDrawer/SideDrawer";
import Toolbar from "#src/components/Toolbar";

import Default from "#src/pages/Default/Default";
import Home from "#src/pages/Home/Home";
import MangaChapter from "#src/pages/MangaChapter/MangaChapter";
import MangaDetails from "#src/pages/MangaDetails/MangaDetails";
import MangaList from "#src/pages/MangaList/MangaList";

import { Switch, Route } from "react-router-dom";

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  const sideDrawerNavItemClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let sideDrawer;
  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div className="app-container">
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} sideDrawerNavItemClickHandler={sideDrawerNavItemClickHandler} />
      {backdrop}
      <div className="main-toolbar-spacer"></div>
      <main className="main-content">
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
      </main>
    </div>
  );
};

export default App;
