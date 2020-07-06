import { ADD_RECIPE, DATA_LOADED, NAME_ALREADY_EXISTS } from "../constants/action-types";

const initialState = {
  recipes: [],
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_RECIPE) {
    return Object.assign({}, state, {
      recipes: state.recipes.concat(action.payload)
    })
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      recipes: state.recipes.concat(action.payload)
    });
  }

  return state;
}

export default rootReducer;
