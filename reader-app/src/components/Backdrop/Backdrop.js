import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { backdropHide, menuDrawerHide } from "#src/redux";

const BackdropDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

const Backdrop = props => {
  if (!props.show) return null;
  return <BackdropDiv onClick={props.backdropHide.bind(this, !props.isFromSearch)} />;
};

const mapStateToProps = state => {
  return {
    show: state.backdrop.show,
    isFromSearch: state.backdrop.isFromSearch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    backdropHide: w => {
      if (w) {
        dispatch(backdropHide());
        dispatch(menuDrawerHide());
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);
