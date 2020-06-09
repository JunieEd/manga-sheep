import { BACKDROP_SHOW, BACKDROP_HIDE } from "#src/constants";

const initialState = {
  show: false,
  isSearchBackdrop: false,
};

const backdropReducer = (state = initialState, action) => {
  switch (action.type) {
    case BACKDROP_SHOW:
      return {
        ...state,
        show: true,
        isFromSearch: action.payload,
      };
    case BACKDROP_HIDE:
      return {
        ...state,
        show: false,
        isFromSearch: action.payload,
      };
    default:
      return state;
  }
};

export default backdropReducer;
