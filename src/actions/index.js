import { ADD_RECIPE } from "../constants/action-types";
import backend from "../api/backend";

export function addRecipe(payload) {
  debugger
  return { type: "ADD_RECIPE", payload }
};

// src/js/actions/index.js

// ...
// our new action creator. Will it work?
export const getData = async () => {
  const response = await backend.get("/recipes");
  return { type: "DATA_LOADED", payload: response };
}
