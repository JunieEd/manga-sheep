import Chapter from "./Chapter";
import Manga from "./Manga";
import * as Query from "./Query";

const resolvers = {
  MangaStatus: {
    Suspended: 0,
    Ongoing: 1,
    Completed: 2
  },
  Chapter,
  Manga,
  Query
};

export default resolvers;
