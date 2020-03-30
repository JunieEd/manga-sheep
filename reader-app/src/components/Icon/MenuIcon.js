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
        <path
          className="cls-1"
          d="M26.3,10H1.5a1.5,1.5,0,0,0,0,3H26.3a1.5,1.5,0,0,0,0-3Z"
        />
        <path
          className="cls-1"
          d="M1.5,3H26.3a1.5,1.5,0,0,0,0-3H1.5a1.5,1.5,0,0,0,0,3Z"
        />
        <path
          className="cls-1"
          d="M26.3,20H1.5a1.5,1.5,0,0,0,0,3H26.3a1.5,1.5,0,1,0,0-3Z"
        />
      </g>
    </g>
  </svg>
);

export default MenuIcon;
