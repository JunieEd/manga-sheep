import React, { createContext } from "react";
import * as R from "ramda";
import useLocalStorage from "#src/hooks/useLocalStorage";

const BookmarkedMangaContext = createContext();

export default BookmarkedMangaContext;

export const Provider = ({ children }) => {
  const [bookmarkedManga, setBookmarkedManga] = useLocalStorage("bookmarkedManga", []);

  const isMangaBookMarked = R.flip(R.includes)(bookmarkedManga);

  const bookmarkManga = (mangaId) => {
    return R.compose(setBookmarkedManga, R.ifElse(isMangaBookMarked, R.identity, R.append(mangaId)))(bookmarkedManga);
  };

  const unBookmarkedManga = (mangaId) => {
    return R.compose(setBookmarkedManga, R.reject(R.equals(mangaId)))(bookmarkedManga);
  };

  return (
    <BookmarkedMangaContext.Provider
      value={{
        bookmarkManga,
        bookmarkedManga,
        isMangaBookMarked,
        unBookmarkedManga,
      }}
    >
      {children}
    </BookmarkedMangaContext.Provider>
  );
};
