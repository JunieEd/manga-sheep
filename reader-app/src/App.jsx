import React, { useCallback, useState, useRef, useEffect } from "react";

import "./App.css";

import Backdrop from "#src/components/Backdrop/Backdrop";
import SideDrawer from "#src/components/SideDrawer/SideDrawer";
import Toolbar from "#src/components/Toolbar/Toolbar";

import Default from "#src/pages/Default/Default";
import Home from "#src/pages/Home/Home";
import MangaDetails from "#src/pages/MangaDetails/MangaDetails";
import MangaList from "#src/pages/MangaList/MangaList";

import { Switch, Route } from "react-router-dom";

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    console.log("clicked: Drawer");
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    console.log("clicked: Backdrop");
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
      <SideDrawer
        show={sideDrawerOpen}
        sideDrawerNavItemClickHandler={sideDrawerNavItemClickHandler}
      />
      {backdrop}
      <div className="main-toolbar-spacer"></div>
      <main className="main-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/mangalist" component={MangaList} />
          <Route path="/mangadetails" component={MangaDetails} />
          <Route component={Default} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
