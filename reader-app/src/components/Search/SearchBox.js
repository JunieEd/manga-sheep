import React from "react";
import styled from "styled-components";
import { SearchIcon, XIcon } from "#src/components/Icon";
import Option from "./Option";

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  height: var(--global-nav-height);

  :focus {
    border-size: 2px;
  }
`;

const SearchInput = styled.input.attrs({ placeholder: "Search Manga" })`
  border: none;
  font-size: 1rem;
  flex: 1;
  line-height: var(--global-nav-height);
  outline: none;

  ::-webkit-search-cancel-button {
    color: red;
    background-color: red;
  }

  @media only screen and (min-width: 576px) {
    line-height: 1.5;
  }
`;

const IconWrapper = styled.div`
  @media only screen and (min-width: 10px);
`;

const Autocomplete = ({ handleChange, xButtonClickHandler, OptionClickHandler, forDesktop, showOption, mangas }) => {
  let searchBoxStyle = [];
  let iconWrapperStyle = [];
  let searchInputStyle = [];

  if (forDesktop) {
    searchBoxStyle = {
      border: "1px solid red",
      borderRadius: "5px",
      height: "calc(var(--global-nav-height) - 15px)",
      paddingRight: "15px",
      width: "calc(250px + 10vw)"
    };

    iconWrapperStyle = {
      height: "calc(var(--global-nav-height) - 15px)",
      width: "var(--global-nav-height)"
    };
  }

  return (
    <>
      <SearchBox style={searchBoxStyle}>
        <IconWrapper className="search-icon-wrapper" style={iconWrapperStyle}>
          <SearchIcon height="20" />
        </IconWrapper>
        <SearchInput onChange={handleChange} style={searchInputStyle} type={forDesktop ? "search" : ""} />
        {!forDesktop && (
          <IconWrapper className="search-icon-wrapper">
            <button className="search-button noSelect" onClick={xButtonClickHandler}>
              <XIcon height="15" />
            </button>
          </IconWrapper>
        )}
      </SearchBox>

      {showOption && (
        <div className={forDesktop ? "option-desktop-wrapper" : "option-mobile-wrapper"}>
          <Option mangas={mangas} OptionClickHandler={OptionClickHandler} />
        </div>
      )}
    </>
  );
};

export default Autocomplete;
