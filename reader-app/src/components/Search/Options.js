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
  z-index: 99;

  top: 100%;
  left: 0;
  right: 0;

  padding: 0 20px;
  margin: 0px auto 0 auto;
  background-color: white;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  @media only screen and (min-width: 768px) {
    --total-padding: calc(65px + 20px);
    padding-left: var(--total-padding);
    padding-right: var(--total-padding);
  }

  > div {
    text-align: center;
  }
`;

const OptionList = styled.ul`
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const OptionListItem = styled.li`
  display: inline-block;
  list-style-position: inside;
  z-index: 1;

  :hover {
    background-color: gray;
  }

  > div,
  span {
    display: inline-block;
  }
`;

const MangaTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Options = ({ mangas }) => (
  <OptionContainer>
    <OptionList>
      {mangas &&
        mangas.map(manga => (
          <OptionList key={manga.id} onClick={() => suggestionSelected(manga.title)}>
            <MangaTitle>
              <Link to="/">{manga.title}</Link>
            </MangaTitle>
            <Tag backgroundColor={STATUS_COLOR[manga.status]} text={manga.status}></Tag>
          </OptionList>
        ))}
      {mangas && mangas.length <= 0 && <li>No manga found.</li>}
    </OptionList>
    <div>
      <Link to="/">View All Mangas</Link>
    </div>
  </OptionContainer>
);

export default Options;
