import { SEARCH_OPTION_SHOW, SEARCH_OPTION_HIDE } from "#src/constants";

const initialState = {
  show: false,
};

const searchOptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_OPTION_SHOW:
      return {
        ...state,
        show: true,
      };
    case SEARCH_OPTION_HIDE:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default searchOptionReducer;
