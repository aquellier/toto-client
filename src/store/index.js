import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/index";
import formValidationMiddleware from "../middleware/recipes/formValidation";
import postRecipeMiddleware from "../middleware/recipes/post";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState){
  const middlewares = [formValidationMiddleware, postRecipeMiddleware, thunk]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const composedEnhancers = composeEnhancers(middlewareEnhancer)

  const store = createStore(reducer, preloadedState, composedEnhancers)
  return store
}
