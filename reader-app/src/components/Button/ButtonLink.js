import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ButtonLink = ({ className = "", to = "", style, children }) => {
  return (
    <Link className={"button-c " + className} to={to} style={style}>
      {children}
    </Link>
  );
};

export default ButtonLink;
