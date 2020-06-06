import React from "react";
import styled from "styled-components";

const ChipWrapper = styled.span`
  border-radius: 0 0 4px 0;
  color: white;
  font-size: 0.5rem;
  line-height: 2;
  padding: 0 5px;
  text-transform: uppercase;
`;

const ChipDefault = styled(ChipWrapper)`
  background: #bdc3c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #2c3e50, #bdc3c7); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #2c3e50,
    #bdc3c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: white;
`;

const ChipBlue = styled(ChipWrapper)`
  background: #4568dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #b06ab3, #4568dc); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #b06ab3,
    #4568dc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: white;
`;

const ChipGreen = styled(ChipWrapper)`
  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #38ef7d, #11998e); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #38ef7d,
    #11998e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: white;
`;

const ChipRed = styled(ChipWrapper)`
  background: #cb356b; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #bd3f32, #cb356b); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #bd3f32,
    #cb356b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: white;
`;

const ChipStyle = (color) => {
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

const Chip2 = ({ className, color, text }) => {
  let ChipWrapperStyle = ChipStyle(color);

  return <ChipWrapperStyle className={className}>{text}</ChipWrapperStyle>;
};

export default Chip2;
