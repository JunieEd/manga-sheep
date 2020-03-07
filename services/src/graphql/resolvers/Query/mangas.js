import Manga from "#root/db/models/Manga";

const mangasResolver = (context, args) => {
  if (args.searchTitle) {
    return Manga.find({
      title: new RegExp(args.searchTitle, "i")
    }).sort({ hits: -1 });
  } else if (args.topUpdates) {
    return Manga.find({})
      .limit(args.first)
      .sort({ hits: -1, lastUpdated: -1 });
  } else {
    return Manga.find({}).sort({ lastUpdated: -1 });
  }
};

export default mangasResolver;
