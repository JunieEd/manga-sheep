import React from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.less";

const sideDrawer = ({ show, sideDrawerNavItemClickHandler }) => {
  console.log("side drawer");
  let drawerClasses = ["side-drawer"];
  if (show) {
    drawerClasses = ["side-drawer", "open"];
  }

  console.log(show);

  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li onClick={sideDrawerNavItemClickHandler}>
          <Link to="/" className="noSelect">
            Home
          </Link>
        </li>
        <li onClick={sideDrawerNavItemClickHandler}>
          <Link to="/mangalist" className="noSelect">
            Manga List
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
