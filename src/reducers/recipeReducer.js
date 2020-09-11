 import defaultState from '../store/initialStates/recipe';
import {
  UPDATE_RECIPE_ATTRIBUTES,
  SAVE_RECIPE_SUCCESS,
  SAVE_RECIPE_FAILURE,
  RECIPE_VALIDATION_ERROR,
  CLEAR_RECIPE
} from "../constants/action-types";

export default function recipeReducer(state=defaultState, action) {
  switch(action.type) {
    case UPDATE_RECIPE_ATTRIBUTES:
      return {
        ...state,
        ...action.newAttributes,
        errors: {
          ...state.errors,
          ...action.errors
        }
      }
    case SAVE_RECIPE_SUCCESS:
      return { ...state, ...action.recipe};
    case SAVE_RECIPE_FAILURE:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.errors
        }
      }
    case RECIPE_VALIDATION_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.errors
        }
      }
    case CLEAR_RECIPE:
      return defaultState;
    default:
     return state;
  }
}
