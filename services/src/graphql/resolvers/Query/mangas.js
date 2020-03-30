import Manga from "#root/db/models/Manga";

const mangasResolver = (context, args) => {
  if (args.searchTitle) {
    return Manga.find({
      title: new RegExp(args.searchTitle, "i")
    })
      .limit(args.first)
      .sort({ hits: -1 });
  }
  //popular manga updates
  else if (args.topUpdates) {
    return Manga.find({})
      .limit(args.first)
      .sort({ hits: -1, lastUpdated: -1 });
  }
  //popular manga updates
  else if (args.allUpdates) {
    return Manga.find({})
      .limit(args.first)
      .sort({ lastUpdated: -1 });
  }
  //top mangas
  else if (args.topManga) {
    return Manga.find({})
      .limit(args.first)
      .sort({ hits: -1 });
  } else {
    return Manga.find({}).sort({ lastUpdated: -1 });
  }
};

export default mangasResolver;
