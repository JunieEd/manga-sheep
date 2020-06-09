import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

const ButtonIcon = ({ className, onClick, children }) => {
  return (
    <ButtonStyled className={className} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default ButtonIcon;
