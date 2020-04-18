import React from "react";
import styled from "styled-components";
import Column from "./Column";

const ColumnBStyled = styled(Column)`
  width: calc(300px + 5vw);
`;

const ColumnB = ({ className }) => <ColumnBStyled className={className} />;
export default ColumnB;
