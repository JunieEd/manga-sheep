import React from "react";

const MenuIcon = ({
  className = "",
  height = "100%",
  viewBox = "0 0 27.8 22.96"
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    height={height}
    viewBox={viewBox}
    style={{ display: "block" }}
  >
    <defs>
      <style>{`.cls-1{fill:#ed1c24;}`}</style>
    </defs>
    {/* <title>Menu</title> */}
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <rect className="cls-1" y="9.98" width="27.8" height="3" rx="1.5" />
        <rect className="cls-1" width="27.8" height="3" rx="1.5" />
        <rect className="cls-1" y="19.96" width="27.8" height="3" rx="1.5" />
      </g>
    </g>
  </svg>
);

export default MenuIcon;
