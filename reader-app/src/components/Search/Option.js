import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Chip from "#src/components/Chip";
import { useDispatch } from "react-redux";
import { backdropShow, backdropHide } from "#src/redux/Action";

const STATUS_COLOR = {
  Completed: "green",
  Ongoing: "blue",
  Suspended: ""
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
  }

  @media only screen and (min-width: 768px) {
    --total-padding: 22px;
    padding-left: var(--total-padding);
    padding-right: var(--total-padding);
  }
`;

const MangaTitle = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;

  > a {
    color: #1c2833;
    white-space: normal;

    :hover {
      color: var(--global-link-color);
    }
  }
`;

const OptionImage = styled.img`
  width: 50px;
  height: 70px;
  overflow: hidden;
  margin-right: 10px;
  display: block;
`;

const sanitiseTitle = title =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-{2,}/g, "-");

const Option = ({ mangas, OptionClickHandler }) => {
  const dispatch = useDispatch();

  if (!mangas) {
    return null;
  }

  const hasResult = mangas.length > 0;

  const optionItems = mangas.map(manga => (
    <OptionListItem key={manga.id} onClick={OptionClickHandler}>
      <Link to={`/${manga.id}-${sanitiseTitle(manga.title)}`}>
        <OptionImage referrerPolicy="no-referrer" src={manga.image} />
      </Link>
      <MangaTitle>
        <Link to={`/${manga.id}-${sanitiseTitle(manga.title)}`}>{manga.title}</Link>
      </MangaTitle>
      <Chip color={STATUS_COLOR[manga.status]} text={manga.status}></Chip>
    </OptionListItem>
  ));

  return (
    <>
      {hasResult && (
        <div style={{ padding: "5px 10px 5px 10px", marginTop: "-7px", backgroundColor: "#fff2f2" }}>Top Results</div>
      )}
      <OptionInsideContainer>
        <OptionList>
          {hasResult && optionItems}
          {!hasResult && <OptionListItem>No manga found</OptionListItem>}
        </OptionList>
      </OptionInsideContainer>
      <div style={{ padding: "5px 0", textAlign: "center", backgroundColor: "#fff2f2" }}>
        <Link to="/">View All {hasResult ? "Results" : "Manga"}</Link>
      </div>
    </>
  );
};

export default Option;
