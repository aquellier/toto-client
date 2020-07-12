import { ADD_RECIPE } from "../../constants/action-types";
import recipeValidationErrors from '../../utils/recipeValidationErrors';
import recipeIsValid from '../../utils/recipeIsValid';
import { recipeValidationError } from '../../actions/recipesActions/index';

const formValidationMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type !== ADD_RECIPE) {
    return next(action)
  }
  const { recipe } = action;
  let errors = recipeValidationErrors(recipe);
  if (!recipeIsValid(errors)) {
    dispatch(recipeValidationError(errors))
  } else {
    next(action)
  }
};

export default formValidationMiddleware;
