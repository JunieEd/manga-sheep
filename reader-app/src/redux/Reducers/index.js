import { combineReducers } from "redux";
import backdropReducer from "./backdropReducer";
import menuDrawerReducer from "./menuDrawerReducer";
import mangasReducer from "./mangasReducer";

const Reducers = combineReducers({
  backdrop: backdropReducer,
  menuDrawer: menuDrawerReducer,
  mangas: mangasReducer,
});

export default Reducers;
