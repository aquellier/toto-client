import backend from "../../api/backend.js";
import {
  UPDATE_USER_ATTRIBUTES,
  USER_VALIDATION_ERROR,
  CREATE_USER
} from "../../constants/action-types";

export function createUser  (user) {
  return { type: CREATE_USER, user: user}
}

export function userValidationError(errors) {
  return { type: USER_VALIDATION_ERROR, errors}
}

export function updateUserAttributes(newAttributes) {
  return { type: UPDATE_USER_ATTRIBUTES, newAttributes}
}
