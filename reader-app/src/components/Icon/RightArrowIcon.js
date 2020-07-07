import React from "react";

export const RightArrowIcon = ({ className = "", height = "100%", viewBox = "0 0 13.72 23.19", color = "#ed1c24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    height={height}
    viewBox={viewBox}
    style={{ display: "block" }}
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          style={{ fill: `${color}` }}
          d="M13.72,11.6h0l-1.08-1.08h0l-1-1h0l-9-9A1.5,1.5,0,0,0,.44,2.56L8,10.07l1.49,1.52L8,13.07.44,20.63a1.5,1.5,0,0,0,2.12,2.12l9.29-9.29,1.87-1.86Z"
        />
      </g>
    </g>
  </svg>
);
