import backend from "../api/backend.js";
import { ADD_RECIPE, DATA_LOADED } from "../constants/action-types";

export const addRecipe = (payload) => {
  return async (dispatch) => {
    const response = await backend.post('/recipes', payload);
    await this.props.history.push('/recipes');
    dispatch({ type: ADD_RECIPE, payload: response.data})
  }
};


export const getRecipes = () => {
  return async (dispatch) => {
    const response = await backend.get('/recipes');
    dispatch({ type: DATA_LOADED, payload: response.data})
  };
}
