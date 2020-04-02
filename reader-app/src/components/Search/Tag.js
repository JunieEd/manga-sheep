import React from "react";
import styled from "styled-components";

const TagWrapper = styled.span`
  border-radius: 4px;
  color: white;
  font-size: 0.6rem;
  line-height: 2;
  padding: 0 5px;
  text-transform: uppercase;
`;

const TagDefault = styled(TagWrapper)`
  background-color: #d5d8dc;
  border: 0.4px solid #566573;
  color: #566573;
`;

const TagBlue = styled(TagWrapper)`
  background-color: #d6eaf8;
  border: 0.4px solid #5dade2;
  color: #5dade2;
`;

const TagGreen = styled(TagWrapper)`
  background-color: #d4efdf;
  border: 0.4px solid #52be80;
  color: #52be80;
`;

const TagRed = styled(TagWrapper)`
  background-color: #f2d7d5;
  border: 0.4px solid #d98880;
  color: #d98880;
`;

const tagStyle = color => {
  let TagStyle = TagDefault;

  switch (color.toLowerCase()) {
    case "blue":
      TagStyle = TagBlue;
      break;
    case "green":
      TagStyle = TagGreen;
      break;
    case "red":
      TagStyle = TagRed;
      break;
    default:
      TagStyle = TagDefault;
      break;
  }

  return TagStyle;
};

const Tag = ({ color, text }) => {
  let TagWrapperStyle = tagStyle(color);

  return <TagWrapperStyle>{text}</TagWrapperStyle>;
};

export default Tag;
