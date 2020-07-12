import {
  ADD_RECIPE,
  DATA_LOADED,
} from "../constants/action-types";

const initialState = {
  recipes: []
}
function recipesReducer(state = initialState, action) {
  // switch(action.type) {
  //   case ADD_RECIPE:
  //     return Object.assign({}, state, {
  //       recipes: state.recipes.concat(action.recipe)
  //     });
  //   case DATA_LOADED:
  //     debugger
      // return Object.assign({}, state, {
      //   recipes: state.recipes.concat(action.payload)
      // });
  //   default:
  //    return state;
  // }
  if (action.type === ADD_RECIPE) {
    // return Object.assign({}, state, {
    //   recipes: state.recipes.concat(action.recipe)
    // });
  }
  if (action.type === DATA_LOADED) {
    debugger
    return Object.assign({}, state, {
      recipes: state.recipes.concat(action.payload)
    });
  }
  return state
}

export default recipesReducer;
