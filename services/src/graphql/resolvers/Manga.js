import { fetchMangaInfo } from "#root/mangaSources/mangaEden";

const Manga = {
  id: mangaObj => mangaObj._id,
  info: async mangaObj => {
    const res = await fetchMangaInfo({
      mangaId: mangaObj.id
    });

    return {
      author: res.data.author,
      chapters: res.data.chapters,
      description: res.data.description,
      id: mangaObj.id
    };
  },
  lastUpdated: mangaObj => new Date(mangaObj.lastUpdated * 1000)
};

export default Manga;
