import React, { useContext } from "react";
import * as R from "ramda";
import { StarIcon } from "#src/components/Icon";
import BookmarkedMangaContext from "#src/contexts/BookmarkedMangaContext";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
`;

const ButtonBookmark = ({ className, manga, height = "20" }) => {
  const { unBookmarkedManga, bookmarkManga, isMangaBookMarked } = useContext(BookmarkedMangaContext);

  const isBookmarked = isMangaBookMarked(manga.id);

  return (
    <Wrapper
      className={className}
      onClick={(e) => {
        e.stopPropagation();
        R.ifElse(isMangaBookMarked, unBookmarkedManga, bookmarkManga)(manga.id);
      }}
    >
      <StarIcon hasFill={isBookmarked} height={height} />
    </Wrapper>
  );
};

export default ButtonBookmark;
