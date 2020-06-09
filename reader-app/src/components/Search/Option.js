import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Chip } from "#src/components/Chip";
import { ButtonBookmark } from "#src/components/Button";
import { useDispatch } from "react-redux";
import { searchOptionHide } from "#src/redux/Action";

import "./style.css";

const STATUS_COLOR = {
  Completed: "green",
  Ongoing: "blue",
  Suspended: "",
};

const OptionInsideContainer = styled.div`
  padding-bottom: 10px;
  overflow: auto;
`;

const OptionList = styled.ul`
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const OptionListItem = styled.li`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  list-style-position: inside;
  padding: 0.5rem 20px;
  z-index: 1;

  :hover {
    background-color: #f6f6f4;
    color: red;
  }

  @media only screen and (min-width: 768px) {
    --total-padding: 22px;
    padding-left: var(--total-padding);
    padding-right: var(--total-padding);
  }
`;

const OptionSubListItem = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  list-style-position: inside;
  cursor: pointer;

  :hover {
    background-color: #f6f6f4;
    color: red;
  }
`;

const MangaTitle = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #1c2833;
  white-space: normal;
`;

const OptionImage = styled.img`
  width: 50px;
  height: 70px;
  overflow: hidden;
  margin-right: 10px;
  display: block;
`;

const sanitiseTitle = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-{2,}/g, "-");

const sanitiseSearchResult = (search) =>
  search
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-{2,}/g, "-");

const StarContainer = styled.div`
  padding-left: calc(5px + 0.1vw);
  padding-bottom: 3px;
  cursor: pointer;
`;

const Option = ({ forDesktop, setAutoCompValue, mangas }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  let hasResult = false;

  if (!mangas) {
    return null;
  } else {
    hasResult = mangas.length > 0;
  }

  const optionClickHandler = (id, title) => {
    setAutoCompValue(title);
    history.push(`/${id}-${sanitiseTitle(title)}`);
    dispatch(searchOptionHide());
  };

  const optionAllSearchResultClickHandler = (e) => {
    e.preventDefault();
    if (hasResult) history.push(`/search?q=${encodeURI(autoCompValue)}`);
    else history.push(`/mangalist`);
    dispatch(searchOptionHide());
  };

  const optionItems = mangas.map((manga) => (
    <OptionListItem key={manga.id}>
      <OptionSubListItem onClick={() => optionClickHandler(manga.id, manga.title)}>
        <OptionImage referrerPolicy="no-referrer" src={manga.image} />
        <MangaTitle>{manga.title}</MangaTitle>
        <Chip color={STATUS_COLOR[manga.status]} text={manga.status}></Chip>
      </OptionSubListItem>
      <StarContainer>
        {/* <StarIcon hasFill={false} height="20" /> */}
        <ButtonBookmark manga={manga} />
      </StarContainer>
    </OptionListItem>
  ));

  return (
    <div className={forDesktop ? "option-desktop-wrapper" : "option-mobile-wrapper"}>
      {hasResult && <div style={{ padding: "5px 10px 5px 10px", backgroundColor: "#fff2f2" }}>Top Results</div>}
      <OptionInsideContainer>
        <OptionList>
          {hasResult && optionItems}
          {!hasResult && <OptionListItem>No manga found</OptionListItem>}
        </OptionList>
      </OptionInsideContainer>
      <div style={{ padding: "5px 0", textAlign: "center", backgroundColor: "#fff2f2" }}>
        <Link to="" onClick={(e) => optionAllSearchResultClickHandler(e)}>
          View All {hasResult ? "Results" : "Manga"}
        </Link>
      </div>
    </div>
  );
};

export default Option;
