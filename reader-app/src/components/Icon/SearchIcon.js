import React from "react";

const SearchIcon = ({
  className = "",
  height = "100%",
  viewBox = "0 0 24 24.13"
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
    {/* <title>Search</title> */}
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          className="cls-1"
          d="M18,3.13A10.57,10.57,0,0,0,3,3a10.63,10.63,0,0,0,14,15.89l4.84,4.84A1.22,1.22,0,0,0,23.64,22l-4.82-4.83A10.58,10.58,0,0,0,18,3.13ZM16.32,16.32A8.15,8.15,0,0,1,4.79,4.79,8.15,8.15,0,0,1,16.32,16.32Z"
        />
      </g>
    </g>
  </svg>
);

export default SearchIcon;
