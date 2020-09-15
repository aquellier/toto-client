import defaultState from '../store/initialStates/user';
import {
  UPDATE_USER_ATTRIBUTES,
  USER_VALIDATION_ERROR
} from "../constants/action-types";

function userReducer(state=defaultState, action) {
  switch(action.type) {
    case UPDATE_USER_ATTRIBUTES:
      return {
        ...state,
        ...action.newAttributes,
        errors: {
          ...state.errors,
          ...action.errors
        }
      }
    case USER_VALIDATION_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.errors
        }
      }
    default:
     return state;
  }
}

export default userReducer;
