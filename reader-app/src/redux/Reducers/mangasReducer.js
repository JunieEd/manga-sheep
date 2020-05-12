import { SET_MANGAS } from "#src/constants";

const initialState = {
  mangas: [],
  categories: [],
  count: 0,
};

const mangasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MANGAS:
      const mangaCount = action.payload.length;
      const mangaCategories =
        action.payload.categories &&
        action.payload.map((manga) => {
          [manga.categories.flat()];
        });

      return {
        ...state,
        mangas: action.payload,
        count: mangaCount,
        categories: mangaCategories,
      };
    default:
      return state;
  }
};

export default mangasReducer;
