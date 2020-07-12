import defaultState from '../store/initialStates/recipes';
import {
  DATA_LOADED,
} from "../constants/action-types";

function recipesReducer(state=defaultState, action) {
  switch(action.type) {
    case DATA_LOADED:
      return [
        ...state,
        ...action.payload
      ]
    default:
     return state;
  }
}

export default recipesReducer;
