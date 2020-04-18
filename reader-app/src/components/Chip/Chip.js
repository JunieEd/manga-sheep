import React from "react";
import styled from "styled-components";

const ChipWrapper = styled.span`
  border-radius: 4px;
  color: white;
  font-size: 0.6rem;
  line-height: 2;
  padding: 0 5px;
  text-transform: uppercase;
`;

const ChipDefault = styled(ChipWrapper)`
  background-color: #d5d8dc;
  border: 0.4px solid #566573;
  color: #566573;
`;

const ChipBlue = styled(ChipWrapper)`
  background-color: #d6eaf8;
  border: 0.4px solid #5dade2;
  color: #4491c3;
`;

const ChipGreen = styled(ChipWrapper)`
  background-color: #d4efdf;
  border: 0.4px solid #52be80;
  color: #369c62;
`;

const ChipRed = styled(ChipWrapper)`
  background-color: #f2d7d5;
  border: 0.4px solid #d98880;
  color: #bf6c64;
`;

const ChipStyle = color => {
  let ChipStyle = ChipDefault;

  switch (color.toLowerCase()) {
    case "blue":
      ChipStyle = ChipBlue;
      break;
    case "green":
      ChipStyle = ChipGreen;
      break;
    case "red":
      ChipStyle = ChipRed;
      break;
    default:
      ChipStyle = ChipDefault;
      break;
  }

  return ChipStyle;
};

const Chip = ({ className, color, text }) => {
  let ChipWrapperStyle = ChipStyle(color);

  return <ChipWrapperStyle className={className}>{text}</ChipWrapperStyle>;
};

export default Chip;
