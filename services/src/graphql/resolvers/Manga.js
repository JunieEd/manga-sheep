import { fetchMangaInfo } from "#root/mangaSources/mangaEden";

const Manga = {
  id: (mangaObj) => mangaObj._id,
  info: async (mangaObj) => {
    const res = await fetchMangaInfo({
      mangaId: mangaObj.id,
    });

    return {
      artist: res.data.artist,
      author: res.data.author,
      categories: res.data.categories,
      chapters: res.data.chapters,
      chapters_len: res.data.chapters_len,
      description: res.data.description,
      id: mangaObj.id,
      released: res.data.released,
    };
  },
  lastUpdated: (mangaObj) => new Date(mangaObj.lastUpdated * 1000),
};

export default Manga;
