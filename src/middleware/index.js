import { ADD_RECIPE, NAME_ALREADY_EXISTS } from "../constants/action-types";

export function uniqueNameMiddleware({ getState, dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === ADD_RECIPE) {
        const state = getState()

        state.recipes.forEach((recipe) => {
          if (action.payload.name === recipe.name) {
            return dispatch({ type: NAME_ALREADY_EXISTS });
          }
        })
      }
      return next(action);
    };
  };
}
