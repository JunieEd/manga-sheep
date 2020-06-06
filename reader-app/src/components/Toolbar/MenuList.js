import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuList = styled.ul`
  display: inline-block;
  height: var(--global-nav-height);
  list-style: none;
  vertical-align: top;
  white-space: nowrap;
`;

const MenuList_Items = styled.li`
  align-items: center;
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;

  > a {
    color: #c3c3c3;
    font-weight: 550;
    font-size: 1.1rem;
    line-height: var(--global-nav-height);

    :hover {
      color: red;
    }
  }
`;
const Menulist = () => {
  return (
    <MenuList>
      <MenuList_Items>
        <Link to="/">Home</Link>
      </MenuList_Items>
      <MenuList_Items>
        <Link to="/mangalist">Manga List</Link>
      </MenuList_Items>
      <MenuList_Items>
        <Link to="/savedmanga">Saved Manga</Link>
      </MenuList_Items>
    </MenuList>
  );
};

export default Menulist;
