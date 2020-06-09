import React from "react";
import "./style.css";

const Button = ({ className = "", onClick, style, children }) => {
  return (
    <div className={"button-c " + className} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
