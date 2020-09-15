import {combineReducers}  from 'redux';
import recipe from './recipeReducer';
import recipes from './recipesReducer';
import user from './userReducer';

export default combineReducers({
  recipe,
  recipes,
  user
});
