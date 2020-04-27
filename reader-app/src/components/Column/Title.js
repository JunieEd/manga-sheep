import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GroupTitle = styled.div`
  align-content: center;
  display: flex;
  margin-top: calc(0.8em + 0.3vw);
  margin-bottom: calc(0.5em + 0.3vw);
  vertical-align: middle;
  width: 100%;

  > span {
    flex: 1;
    color: #484848;
    font-family: "Roboto Condensed";
    font-size: calc(1em + 0.5vw);
    font-weight: bold;
    width: 100%;
  }

  > a {
    font-size: calc(0.8em + 0.3vw);
    line-height: 2;
    vertical-align: middle;
  }
`;

const Title = ({ text, route }) => (
  <GroupTitle>
    <span>{text}</span>
    {route && route != "" && <Link to={route}>View All</Link>}
  </GroupTitle>
);

export default Title;
