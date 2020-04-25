import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { uniqueNameMiddleware } from "../middleware";

const store = createStore(
  rootReducer,
  applyMiddleware(uniqueNameMiddleware)
);

export default store;
