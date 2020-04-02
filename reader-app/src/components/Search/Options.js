import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Tag from "./Tag";

const STATUS_COLOR = {
  Completed: "green",
  Ongoing: "blue",
  Suspended: ""
};

const OptionContainer = styled.div`
  position: absolute;
  border: none;
  border-bottom: 7px solid red;
  font-size: 0.9rem;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  margin: 0px auto 0 auto;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  > div {
    text-align: center;
  }
`;

const OptionInsideContainer = styled.div`
  padding-bottom: 10px;
`;

const OptionList = styled.ul`
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const OptionListItem = styled.li`
  display: block;
  list-style-position: inside;
  padding: 0.5rem 20px;
  z-index: 1;

  :hover {
    background-color: #f6f6f4;
  }

  @media only screen and (min-width: 768px) {
    --total-padding: calc(65px + 20px);
    padding-left: var(--total-padding);
    padding-right: var(--total-padding);
  }
`;

const OptionListItemWrapper = styled.span`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
`;

const MangaTitle = styled.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  > a {
    color: #1c2833;
  }
`;

const BottomNav = styled.div`
  width: 100%;
  height: 2px;
  background-color: red;
`;

const ViewAllWrapper = styled.div`
  padding: 5px 0;
`;

const NoMangaFoundWrapper = styled.div``;

const sanitiseTitle = title =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-{2,}/g, "-");

const Options = ({ mangas, OptionClickHandler }) => {
  if (!mangas) {
    return null;
  }

  return (
    <OptionContainer className="with-content">
      <OptionInsideContainer>
        <OptionList>
          {mangas &&
            mangas.map(manga => (
              <OptionListItem key={manga.id} onClick={OptionClickHandler}>
                <OptionListItemWrapper>
                  <MangaTitle>
                    <Link to={`/${manga.id}-${sanitiseTitle(manga.title)}`}>{manga.title}</Link>
                  </MangaTitle>
                  <Tag color={STATUS_COLOR[manga.status]} text={manga.status}></Tag>
                </OptionListItemWrapper>
              </OptionListItem>
            ))}
          {mangas && mangas.length <= 0 && <OptionListItem>No manga found</OptionListItem>}
        </OptionList>
      </OptionInsideContainer>
      <ViewAllWrapper>
        <Link to="/">View All Manga</Link>
      </ViewAllWrapper>
    </OptionContainer>
  );
};

export default Options;
