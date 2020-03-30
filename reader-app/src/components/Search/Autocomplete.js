import React from "react";
import styled from "styled-components";
import Icon from "#src/components/Icon";

const AutoCompleteHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  vertical-align: middle;

  > a {
    font-size: 0px;
  }
`;

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: var(--global-nav-height);
  justify-content: center;
  width: calc(var(--global-nav-height) + 10px);
`;

const SearchInput = styled.input.attrs({ placeholder: "Search Manga" })`
  border: none;
  font-size: 1rem;
  flex: 1;
  line-height: var(--global-nav-height);
  outline: none;
`;

const XButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: var(--global-nav-height);
  width: auto;
  background: transparent;
  border: none;
  cursor: pointer;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

const Autocomplete = ({ XButtonClickHandler, handleChange }) => (
  <AutoCompleteHeader>
    <IconContainer>
      <Icon.SearchIcon height="20" />
    </IconContainer>
    <SearchInput onChange={handleChange} />
    <IconContainer>
      <XButton className="noSelect" onClick={XButtonClickHandler}>
        <Icon.XIcon height="15" />
      </XButton>
    </IconContainer>
  </AutoCompleteHeader>
);

export default Autocomplete;
