import React from "react";
import styled from "styled-components";

const TagWrapper = styled.span`
  font-size: 0.7em;
  border-radius: 0.3em;
  color: white;
  text-transform: uppercase;
  padding: 0.1em 0.2em;
`;

const Tag = ({ backgroundColor, color, text }) => (
  <TagWrapper style={{ backgroundColor: `${backgroundColor || "gray"}`, color: `${color || "white"}` }}>
    {text}
  </TagWrapper>
);

export default Tag;
