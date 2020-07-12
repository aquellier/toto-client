import {combineReducers}  from 'redux';
import recipe from './recipeReducer';
import recipes from './recipesReducer';

export default combineReducers({
  recipe,
  recipes
});
