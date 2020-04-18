import { combineReducers } from "redux";
import backdropReducer from "./backdropReducer";
import menuDrawerReducer from "./menuDrawerReducer";

const Reducers = combineReducers({
  backdrop: backdropReducer,
  menuDrawer: menuDrawerReducer
});

export default Reducers;
