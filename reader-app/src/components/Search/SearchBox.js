import React, { useState } from "react";
import styled from "styled-components";
import { SearchIcon, XIcon, BackArrowIcon } from "#src/components/Icon";
import Option from "./Option";
import OutsideClickAlerter from "./OutsideClickAlerter";
import { useSelector, useDispatch } from "react-redux";
import { searchOptionShow, searchOptionHide } from "#src/redux/Action";

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
  background-color: white;

  @media only screen and (min-width: 576px) {
    line-height: 1.5;
  }
`;

const IconWrapper = styled.div``;

const Autocomplete = ({ autoCompValue, setAutoCompValue, handleChange, xButtonClickHandler, forDesktop, mangas }) => {
  let searchBoxStyle = [];
  let iconWrapperStyle = [];
  const dispatch = useDispatch();
  const searchOption = useSelector((state) => state.searchOption);

  if (forDesktop) {
    searchBoxStyle = {
      border: "1px solid red",
      borderRadius: "5px",
      height: "calc(var(--global-nav-height) - 15px)",
      width: "calc(250px + 10vw)",
      backgroundColor: "white",
    };
    //    ${'' /* paddingRight: "15px", */}
    iconWrapperStyle = {
      height: "calc(var(--global-nav-height) - 15px)",
      width: "var(--global-nav-height)",
    };
  }

  const handleFocus = () => {
    dispatch(searchOptionShow());
    console.log("focus", searchOption);
  };

  const handleClickOutside = () => {
    dispatch(searchOptionHide());
    console.log("clicked");
  };

  return (
    <OutsideClickAlerter handleClick={handleClickOutside}>
      <SearchBox style={searchBoxStyle}>
        <IconWrapper className="search-icon-wrapper c-width" style={iconWrapperStyle}>
          <SearchIcon height="20" />
        </IconWrapper>
        <SearchInput value={autoCompValue} onChange={handleChange} onFocus={() => handleFocus()} />
        {autoCompValue !== "" && (
          <button
            className="search-button noSelect"
            style={{ paddingLeft: "5px", paddingRight: "13px" }}
            onClick={() => setAutoCompValue("")}
          >
            <XIcon height="10" />
          </button>
        )}
        {!forDesktop && (
          <IconWrapper className="search-icon-wrapper c-width matted">
            <button className="search-button noSelect" onClick={xButtonClickHandler}>
              <BackArrowIcon height="18" />
            </button>
          </IconWrapper>
        )}
      </SearchBox>

      {searchOption.show && autoCompValue != "" && (
        <Option setAutoCompValue={setAutoCompValue} forDesktop={forDesktop} mangas={mangas} />
      )}
    </OutsideClickAlerter>
  );
};

export default Autocomplete;
