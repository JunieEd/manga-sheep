import React, { useContext } from "react";
import * as R from "ramda";
import { StarIcon } from "#src/components/Icon";
import BookmarkedMangaContext from "#src/contexts/BookmarkedMangaContext";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #00000059;
  border-radius: 0 0 0 calc(3px + 0.1vw);

  height: 25px;
  width: 25px;

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const WrapperInner = styled.div`
  cursor: pointer;
`;

const ButtonBookmarkWithBG = ({ className, manga, height = "20" }) => {
  const { unBookmarkedManga, bookmarkManga, isMangaBookMarked } = useContext(BookmarkedMangaContext);

  const isBookmarked = isMangaBookMarked(manga.id);

  return (
    <Wrapper className={className}>
      <WrapperInner
        onClick={(e) => {
          e.stopPropagation();
          R.ifElse(isMangaBookMarked, unBookmarkedManga, bookmarkManga)(manga.id);
        }}
      >
        <StarIcon hasFill={isBookmarked} height={height} />
      </WrapperInner>
    </Wrapper>
  );
};

export default ButtonBookmarkWithBG;
