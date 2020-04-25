import { ADD_RECIPE } from "../constants/action-types";

const initialState = {
  recipes: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_RECIPE) {
    return Object.assign({}, state, {
      recipes: state.recipes.concat(action.payload)
    })
  }
  return state;
}

export default rootReducer;
