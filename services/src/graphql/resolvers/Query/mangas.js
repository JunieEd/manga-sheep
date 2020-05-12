import Manga from "#root/db/models/Manga";

const MANGA_STATUS = {
  Suspended: 0,
  Ongoing: 1,
  Completed: 2,
};

const mangasResolver = (context, args) => {
  if (args.searchTitle) {
    return Manga.find({
      title: new RegExp(args.searchTitle, "i"),
    })
      .limit(args.first)
      .sort({ hits: -1 });
  }
  //popular manga updates
  else if (args.topUpdates) {
    return Manga.find({ lastUpdated: { $gt: args.fromDate, $lt: args.toDate } })
      .limit(args.first)
      .sort({ hits: -1 });
  }
  //popular manga updates
  else if (args.allUpdates) {
    return Manga.find({}).limit(args.first).sort({ lastUpdated: -1 });
  }
  //top mangas
  else if (args.topManga) {
    return Manga.find({}).limit(args.first).sort({ hits: -1 });
  }
  //all mangas
  else if (args.allManga) {
    let sortBy = getSortBy(args.sortByType, args.isAsc);
    let status = args.status == "All" ? {} : { status: MANGA_STATUS[args.status] };
    if (args.categories && args.categories.length > 0) {
      return Manga.find(status)
        .find({ categories: { $in: args.categories } })
        .sort(sortBy);
    } else {
      return Manga.find(status).limit(args.first).sort(sortBy);
    }
  } else {
    return Manga.find({}).sort({ lastUpdated: -1 });
  }
};

const getSortBy = (sortByType, isAsc) => {
  switch (sortByType) {
    case "Rank":
      return { hits: isAsc ? -1 : 1 };
    case "Name":
      return { title: isAsc ? 1 : -1 };
    default:
      return { lastUpdated: isAsc ? -1 : 1 };
  }
};

export default mangasResolver;
