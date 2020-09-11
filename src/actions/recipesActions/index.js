import backend from "../../api/backend.js";
import {
  ADD_RECIPE,
  DATA_LOADED,
  RECIPE_VALIDATION_ERROR,
  UPDATE_RECIPE_ATTRIBUTES,
  SAVE_RECIPE_SUCCESS,
  SAVE_RECIPE_FAILURE,
  CLEAR_RECIPE
} from "../../constants/action-types";

export const addRecipe = recipe => {
  debugger
  return { type: ADD_RECIPE, recipe: recipe}
}


export function getRecipes() {
  return async function (dispatch) {
    const response = await backend.get('/recipes');
    dispatch({ type: DATA_LOADED, payload: response.data})
  }
}

export function recipeValidationError(errors) {
  return { type: RECIPE_VALIDATION_ERROR, errors}
}

export function updateRecipeAttributes(newAttributes) {
  return {
    type: UPDATE_RECIPE_ATTRIBUTES,
    newAttributes
  }
}

export function saveRecipeSuccess(recipe) {
  return {
    type: SAVE_RECIPE_SUCCESS,
    recipe
  }
}

export function saveRecipeFailure(recipe)  {
  return {
    type: SAVE_RECIPE_FAILURE,
    recipe
  }
}

export function clearRecipe() {
  return {
    type: CLEAR_RECIPE
  }
}
