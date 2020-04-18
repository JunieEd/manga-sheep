import React from "react";
import styled from "styled-components";
import Column from "./Column";

const ColumnAStyled = styled(Column)`
  width: calc(768px + 10vw);

  @media screen and (max-width: 480px ) {
    width: 100%;
    min-width: none:
  }
`;

const ColumnA = ({ className }, props) => <ColumnAStyled className={className}>{props.children}</ColumnAStyled>;

export default ColumnA;
