import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import gql from "graphql-tag";
import styled from "styled-components";
import * as R from "ramda";

import { ButtonLink } from "#src/components/Button";
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

const Nav = ({ className, mangaId, mangaName, chapterId }) => {
  const { data, loading } = useQuery(query, {
    variables: { mangaId },
  });
  const history = useHistory();

  if (loading) return <div>Loading...</div>;
  if (!chapterId) return null;

  const buildChapterLink = (chapterId) => `/${mangaId}-${mangaName}/${chapterId}`;

  const getChapterUrl = () => {
    const isCurrentChapter = R.propEq("id", `${chapterId}`);
    const currentChapterIndex = R.findIndex(isCurrentChapter, data.manga.info.chapters);
    const next = data.manga.info.chapters[currentChapterIndex - 1];
    const prev = data.manga.info.chapters[currentChapterIndex + 1];

    return {
      prev: buildChapterLink(prev ? prev.id : ""),
      next: buildChapterLink(next ? next.id : ""),
      nextId: next ? next.id : "",
    };
  };

  return (
    <NavWrapper className={className}>
      {!loading && data.manga && (
        <ButtonLink className="prev" to={() => getChapterUrl().prev}>
          Prev
        </ButtonLink>
      )}
      <div>
        <SelectLabel htmlFor="chapter">
          <Select id="chapter" onChange={(e) => history(buildChapterLink(e.target.value))} value={chapterId}>
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
        <ButtonLink className="next" to={() => getChapterUrl().next}>
          {getChapterUrl().nextId == "" ? "End" : "Next"}
        </ButtonLink>
      )}
    </NavWrapper>
  );
};

export default Nav;
