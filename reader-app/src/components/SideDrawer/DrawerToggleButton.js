import React from "react";
import "./DrawerToggleButton.less";
import MenuLogo from "#src/svg/icon-menu";

const drawerToggleButton = props => (
  <button className="toggle-button noSelect" onClick={props.click}>
    <MenuLogo />
  </button>
);

export default drawerToggleButton;
