import React from "react";
import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  padding: calc(10px + 0.2vw);
  width: 100%;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;

const Button = styled.a`
  background-color: red;
  color: white;
  line-height: 1.5rem;
  font-size: 0.9rem;
  border-radius: calc(4px + 0.1vw);
  padding: calc(4px + 0.1vw) calc(6px + 0.1vw);
  cursor: pointer;
  margin: calc(2px + 0.1vw) calc(2px + 0.1vw);
  border: none;

  :hover {
    background-color: #b32525;
  }
`;

const Select = styled.select``;

const Nav = () => {
  return (
    <NavWrapper>
      <div>
        Chapters
        <Select>
          <option>asd</option>
        </Select>
      </div>
      <Button>Prev</Button>
      <Button>Next</Button>
      <div>
        Reading Style
        <Select>
          <option>asd</option>
        </Select>
      </div>
    </NavWrapper>
  );
};

export default Nav;
