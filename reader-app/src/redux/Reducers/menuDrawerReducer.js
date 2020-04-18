import { MENU_DRAWER_SHOW, MENU_DRAWER_HIDE } from "#src/constants";

const initialState = {
  show: false
};

const menuDrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_DRAWER_SHOW:
      return {
        ...state,
        show: true
      };
    case MENU_DRAWER_HIDE:
      return {
        ...state,
        show: false
      };
    default:
      return state;
  }
};

export default menuDrawerReducer;
