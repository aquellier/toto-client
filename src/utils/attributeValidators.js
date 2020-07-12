import { store } from '../index';

export const attributeValidators = {
  name: nameValid,
  ingredients: ingredientsValid
}

function nameValid(recipe) {
  if (!recipe.name || recipe.name.length < 10) {
    return false
  }
  const recipes = store.getState().recipes
  return !nameAlreadyExists(recipe.name, recipes)
}

function ingredientsValid(recipe) {
  return recipe.ingredients && recipe.ingredients.length > 8;
}

const nameAlreadyExists = (name, recipes) => {
  return recipes.some(recipe => recipe.name === name)
}
