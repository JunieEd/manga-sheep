import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  enum MangaStatus {
    Suspended
    Ongoing
    Completed
  }

  type Chapter {
    id: ID!
    lastUpdated: Date!
    images: [ChapterImage!]!
    number: String!
    title: String
  }

  type ChapterImage {
    url: String!
    height: Int!
    width: Int!
  }

  type Manga {
    categories: [String]
    id: ID!
    info: MangaInfo!
    image: String
    lastUpdated: Date!
    status: MangaStatus
    title: String!
    hits: Int!
  }

  type MangaInfo {
    aka: [String!]!
    artist: String
    author: String
    categories: [String!]!
    chapters: [Chapter!]!
    chapters_len: String!
    description: String!
    id: String!
    released: String
    type: String
  }

  type Query {
    manga(id: ID!): Manga!
    chapter(id: ID!): Chapter!
    mangas(
      searchTitle: String
      topUpdates: Boolean
      fromDate: Int
      toDate: Int
      allUpdates: Boolean
      topManga: Boolean
      allManga: Boolean
      status: String
      categories: [String]
      sortByType: String
      isAsc: Boolean
      first: Int
    ): [Manga!]!
  }
`;

export default typeDefs;
