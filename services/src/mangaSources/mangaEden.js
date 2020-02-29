import globalAxios from "axios";

export const axios = globalAxios.create({
  baseURL: process.env.MANGA_EDEN_URL
});

export const fetchAllMangas = lang => {
  const langKey = { en: 0 }[lang];
  return axios.get(`list/${langKey}/`).then(res => {
    res.data.manga = transformMangas(res.data.manga);
    return res;
  });
};

export const fetchChapterImage = ({ chapterId }) => {
  return axios.get(`chapter/${chapterId}/`).then(res => {
    res.data.images = transformImages(res.data.images);
    return res;
  });
};

export const fetchMangaInfo = ({ mangaId }) => {
  return axios.get(`manga/${mangaId}/`).then(res => {
    res.data.chapters = transformMangaInfos(res.data.chapters);
    return res;
  });
};

const transformMangaInfos = chapters =>
  chapters.map(([number, lastUpdated, title, id]) => ({
    id,
    lastUpdated,
    number,
    title
  }));

const IMAGES_CDN_BASE_URL = "https://cdn.mangaeden.com/mangasimg/";

const transformImages = images =>
  images.map(([index, url, width, height]) => ({
    index,
    url: IMAGES_CDN_BASE_URL + url,
    height,
    width
  }));

const transformMangas = mangas =>
  mangas
    .filter(manga => manga.ld)
    .map(
      ({
        a: alias,
        c: categories,
        h: hits,
        i: _id,
        im: image,
        ld: lastUpdated,
        s: status,
        t: title
      }) => ({
        _id,
        alias,
        categories,
        hits,
        image: IMAGES_CDN_BASE_URL + image,
        lastUpdated,
        status,
        title
      })
    );
