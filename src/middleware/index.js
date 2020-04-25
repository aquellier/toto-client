import { ADD_RECIPE } from "../constants/action-types";

export function uniqueNameMiddleware({ getState, dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_RECIPE) {
        const state = getState()
        debugger

        state.recipes.forEach((recipe) => {
          if (action.payload.name === recipe.name) {
            debugger
            return dispatch({ type: "NAME_ALREADY_EXISTS" });
          }
        })
      }
      return next(action);
    };
  };
}
