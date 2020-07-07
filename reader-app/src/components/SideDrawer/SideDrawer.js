import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { backdropHide, menuDrawerHide } from "#src/redux";

import { XIcon, LogoIcon } from "#src/components/icon";

const SideDrawerNav = styled.nav`
  height: 70%;
  box-shadow: 1px 0px 7px black;
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  transform: translateY(-155%);
  transition: transform 0.3s ease-out;

  @media (min-width: 769px) {
    .side-drawer {
      display: none;
    }
  }
`;

const SideDrawerHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  vertical-align: middle;
  background-color: #ff000021;
`;

const SideDrawerMenuList = styled.ul`
  flex: 1;
  list-style: none;
  overflow: auto;
`;

const SideDrawerMenuListItem = styled.li`
  display: flex;
  height: 50px;
  vertical-align: middle;
  align-items: center;

  :hover {
    background-color: #dedede61;
  }

  > a {
    color: var(--global-red-color);
    padding-left: 20px;
  }
`;

const BottomLine = styled.div`
  width: 100%;
  height: 5px;
  background-color: var(--global-red-color);
`;

const SideDrawer = (props) => {
  return (
    <SideDrawerNav className="matted-white" style={{ transform: `${props.show ? "translateY(0)" : ""}` }}>
      <SideDrawerHeader>
        <div className="icon-wrapper">
          <Link to="/" onClick={props.menuDrawerHide}>
            <LogoIcon height="30" />
          </Link>
        </div>
        <div style={{ flex: "1" }} />
        <div className="icon-wrapper">
          <button className="icon-button noSelect" onClick={props.menuDrawerHide}>
            <XIcon height="20" onClick={props.menuDrawerHide} />
          </button>
        </div>
      </SideDrawerHeader>
      <SideDrawerMenuList>
        <SideDrawerMenuListItem>
          <Link to="/" className="noSelect" onClick={props.menuDrawerHide}>
            Home
          </Link>
        </SideDrawerMenuListItem>
        <hr />
        <SideDrawerMenuListItem>
          <Link to="/mangalist" className="noSelect" onClick={props.menuDrawerHide}>
            Manga List
          </Link>
        </SideDrawerMenuListItem>
        <hr />
        <SideDrawerMenuListItem>
          <Link to="/savedmanga" className="noSelect" onClick={props.menuDrawerHide}>
            Saved Manga
          </Link>
        </SideDrawerMenuListItem>
      </SideDrawerMenuList>
      <BottomLine />
    </SideDrawerNav>
  );
};

const mapStateToProps = (state) => {
  return {
    show: state.menuDrawer.show,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    menuDrawerHide: () => {
      dispatch(menuDrawerHide());
      dispatch(backdropHide());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
