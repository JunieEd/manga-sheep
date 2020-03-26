import React from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.less";

import styled from "styled-components";

const SideDrawerMenuList = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SideDrawerMenuListItem = styled.li`
  margin: 0.5rem 0;
`;

const SideDrawer = ({ show, sideDrawerNavItemClickHandler }) => {
  console.log("side drawer");
  let drawerClasses = ["side-drawer"];
  if (show) {
    drawerClasses = ["side-drawer", "open"];
  }

  console.log(show);

  const SideDrawerNav = styled.nav`
    height: 300px;
    background: #ff0000bd;
    box-shadow: 1px 0px 7px black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 400px;
    z-index: 200;
    transform: translateY(-105%);
    transition: transform 0.3s ease-out;
    transform: ${show ? "translateY(0)" : ""};

    @media (min-width: 769px) {
      .side-drawer {
        display: none;
      }
    }
  `;

  return (
    // <nav className={drawerClasses.join(" ")}>
    //   <ul>
    //     <li onClick={sideDrawerNavItemClickHandler}>
    //       <Link to="/" className="noSelect">
    //         Home
    //       </Link>
    //     </li>
    //     <li onClick={sideDrawerNavItemClickHandler}>
    //       <Link to="/mangalist" className="noSelect">
    //         Manga List
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>

    <SideDrawerNav>
      <SideDrawerMenuList>
        <SideDrawerMenuListItem>
          <Link to="/" className="noSelect">
            Home
          </Link>
        </SideDrawerMenuListItem>
        <SideDrawerMenuListItem onClick={sideDrawerNavItemClickHandler}>
          <Link to="/mangalist" className="noSelect">
            Manga List
          </Link>
        </SideDrawerMenuListItem>
      </SideDrawerMenuList>
    </SideDrawerNav>
  );
};

export default SideDrawer;
