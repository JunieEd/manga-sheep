import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import styled from "styled-components";
import * as R from "ramda";

import "./style.css";

const query = gql`
  query($mangaId: ID!) {
    manga(id: $mangaId) {
      id
      info {
        chapters {
          id
          number
          title
        }
      }
    }
  }
`;

const NavWrapper = styled.div`
  display: flex;
  padding: calc(5px + 0.2vw) calc(10px + 0.2vw);
  width: 100%;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

const Button = styled(Link)`
  background-color: red;
  color: white;
  line-height: 1.5rem;
  font-size: 0.9rem;
  border-radius: calc(4px + 0.1vw);
  padding: calc(4px + 0.1vw) calc(10px + 0.1vw);
  cursor: pointer;
  margin: calc(2px + 0.1vw) calc(2px + 0.1vw);
  border: none;

  :hover {
    background-color: #b32525;
  }
`;

const Select = styled.select`
  border: none;
  padding: calc(8px + 0.1vw) 30px calc(8px + 0.1vw) 18px;
  appearance: none;
  border-radius: calc(4px + 0.1vw);
  background-color: var(--global-black-color);
  color: white;
  cursor: pointer;
`;

const SelectLabel = styled.label`
  background-color: red;
  border-radius: calc(4px + 0.1vw);
  display: inline-block;
  position: relative;
`;

const Nav = ({ className, mangaId, chapterId }) => {
  const { data, loading } = useQuery(query, {
    variables: { mangaId },
  });

  if (loading) return <div>Loading...</div>;
  if (!chapterId) return null;

  const buildChapterLink = (mangaName, chapterId) => `/${mangaId}-${mangaName}/${chapterId}`;

  const chapterChange = (e) => {
    window.location = buildChapterLink(data.manga.title, e.target.value);
  };

  const getChapterUrl = () => {
    const isCurrentChapter = R.propEq("id", `${chapterId}`);
    const currentChapterIndex = R.findIndex(isCurrentChapter, data.manga.info.chapters);
    const next = data.manga.info.chapters[currentChapterIndex - 1];
    const prev = data.manga.info.chapters[currentChapterIndex + 1];

    return {
      prev: buildChapterLink(data.manga.title, prev ? prev.id : ""),
      next: buildChapterLink(data.manga.title, next ? next.id : ""),
    };
  };

  return (
    <NavWrapper className={className}>
      {!loading && data.manga && (
        <Button className="prev" to={() => getChapterUrl().prev}>
          Prev
        </Button>
      )}
      <div>
        <SelectLabel htmlFor="chapter">
          <Select id="chapter" onChange={(e) => chapterChange(e)} value={chapterId}>
            {!loading &&
              data.manga &&
              data.manga.info.chapters.map((chapter, index) => (
                <option key={chapter.id} value={chapter.id}>
                  Chapter {chapter.number}
                </option>
              ))}
          </Select>
        </SelectLabel>
      </div>
      {!loading && data.manga && (
        <Button className="next" to={() => getChapterUrl().next}>
          Next
        </Button>
      )}
    </NavWrapper>
  );
};

export default Nav;
