import { combineReducers } from "redux";
import backdropReducer from "./backdropReducer";
import menuDrawerReducer from "./menuDrawerReducer";
import mangasReducer from "./mangasReducer";
import searchOptionReducer from "./searchOptionReducer";

const Reducers = combineReducers({
  searchOption: searchOptionReducer,
  backdrop: backdropReducer,
  menuDrawer: menuDrawerReducer,
  mangas: mangasReducer,
});

export default Reducers;
