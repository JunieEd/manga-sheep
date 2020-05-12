import { BACKDROP_SHOW, BACKDROP_HIDE, MENU_DRAWER_SHOW, MENU_DRAWER_HIDE, SET_MANGAS } from "#src/constants";

export const backdropShow = (isFromSearch = false) => {
  return {
    type: BACKDROP_SHOW,
    payload: isFromSearch,
  };
};

export const backdropHide = () => {
  return {
    type: BACKDROP_HIDE,
  };
};

export const menuDrawerShow = () => {
  return {
    type: MENU_DRAWER_SHOW,
  };
};

export const menuDrawerHide = () => {
  return {
    type: MENU_DRAWER_HIDE,
  };
};

export const setManga = (mangas = [""]) => {
  return {
    type: SET_MANGAS,
    payload: mangas,
  };
};
