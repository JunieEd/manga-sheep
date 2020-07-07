import React from "react";
import { browserHistory } from "react-router";
import { Link, useHistory } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import { MdHome, MdSettings, MdEmail, MdInfo, MdWeb } from "react-icons/md";
import { RightArrowIcon } from "#src/components/Icon";

const Separator = ({ children, ...props }) => (
  <span style={{ color: "teal" }} {...props}>
    {children}
  </span>
);

// const items = [
//   { to: "/", label: "Home" },
//   { to: "/mangalist", label: "Manga List" },
//   { to: "/savedmanga", label: "Saved Manga" },
//   { to: "/about", label: "About" },
//   { to: "/blog", label: "Blog" },
// ];

const Breadcrumb_Custom = ({ items }) => {
  console.log(browserHistory);

  return (
    <Breadcrumb
      separator={
        <Separator>
          <RightArrowIcon height="calc(0.4rem + 0.1vw)" color="#454545" />
        </Separator>
      }
    >
      {items &&
        items.map(({ to, label, icons }) => {
          const Icon = icons;
          return (
            <div key={to}>
              {Icon && <Icon />}
              <Link to={to}>{label}</Link>
            </div>
          );
        })}
    </Breadcrumb>
  );
};

export default Breadcrumb_Custom;
