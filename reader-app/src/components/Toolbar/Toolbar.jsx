import React from "react";
import { Link } from "react-router-dom";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import Search from "../Search/Search";
import "./Toolbar.less";
import Logo from "#src/svg/logo-word.svg";

console.log("toolbar");

const toolbar = ({ drawerClickHandler }) => {
  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-navigation-toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <div className="toolbar-navigation-logo-container noSelect">
          <Link to="./" className="noSelect">
            <Logo className="logo" />
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar-navigation-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mangalist">Manga List</Link>
            </li>
          </ul>
        </div>
        <div className="toolbar-navigation-search-container">
          <Search placeHolder="Search manga" />
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
