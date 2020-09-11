import backend from "../../api/backend.js";
import { ADD_RECIPE } from "../../constants/action-types";
import {
  saveRecipeSuccess,
  saveRecipeFailure
} from '../../actions/recipesActions/index';

const postRecipeMiddleware = ({ dispatch, getState}) => next => async action => {
  if (action.type !== ADD_RECIPE) {
    return next(action)
  }
  try {
    const response = await backend.post('/recipes', action.recipe);
    dispatch(saveRecipeSuccess(response.data))
  } catch (err) {
    console.log('error: ', err.message)
    dispatch(saveRecipeFailure(err))
  }
};

export default postRecipeMiddleware;
