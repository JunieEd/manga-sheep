import React, { createContext } from "react";
import * as R from "ramda";
import useLocalStorage from "#src/hooks/useLocalStorage";

const ReadChaptersContext = createContext();

export default ReadChaptersContext;

export const Provider = ({ children }) => {
  const [readChapters, setReadChapters] = useLocalStorage("readChapters", []);

  const isChapterRead = R.flip(R.includes)(readChapters);

  const addReadChapter = (mangaId, chapterId) => {
    let mangaChapter = { mangaId: mangaId, chapterId: chapterId };
    return R.compose(setReadChapters, R.append(mangaChapter))(readChapters);
  };

  return (
    <ReadChaptersContext.Provider
      value={{
        readChapters,
        isChapterRead,
        addReadChapter,
      }}
    >
      {children}
    </ReadChaptersContext.Provider>
  );
};
