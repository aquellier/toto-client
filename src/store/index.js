import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/index";
import formValidationMiddleware from "../middleware/recipes/formValidation";
import formValidationUserMiddleware from "../middleware/users/formValidation";
import postRecipeMiddleware from "../middleware/recipes/post";
import createUserMiddleware from "../middleware/recipes/post";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState){
  const middlewares = [formValidationMiddleware,
  postRecipeMiddleware,
  formValidationUserMiddleware,
  createUserMiddleware, thunk]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const composedEnhancers = composeEnhancers(middlewareEnhancer)

  const store = createStore(reducer, preloadedState, composedEnhancers)
  return store
}
