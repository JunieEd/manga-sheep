import React, { useState, useRef } from "react";
import styled from "styled-components";
import Icon from "#src/components/Icon";
import { resolveFieldValueOrError } from "graphql/execution/execute";

const AutoCompleteHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  vertical-align: middle;
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

  @media only screen and (min-width: 768px) {
    line-height: 1.5;
  }
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

const MobileViewContainer = styled(AutoCompleteHeader)`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const FullViewContainer = styled(AutoCompleteHeader)`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

const Autocomplete = ({ XButtonClickHandler, handleChange, autocompleteVal }) => {
  return (
    <AutoCompleteHeader>
      <MobileViewContainer>
        <IconContainer>
          <Icon.SearchIcon height="20" />
        </IconContainer>
        <SearchInput onChange={handleChange} />
        <IconContainer>
          <XButton className="noSelect" onClick={XButtonClickHandler} type="reset">
            <Icon.XIcon height="15" />
          </XButton>
        </IconContainer>
      </MobileViewContainer>

      <FullViewContainer>
        <SearchInput onChange={handleChange} />
      </FullViewContainer>
    </AutoCompleteHeader>
  );
};

export default Autocomplete;
