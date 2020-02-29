import { fetchChapterImage } from "../../mangaSources/mangaEden";

const Chapter = {
  images: async chapterObject => {
    const res = await fetchChapterImage({
      chapterId: chapterObject.id
    });

    return res.data.images;
  }
};

export default Chapter;
