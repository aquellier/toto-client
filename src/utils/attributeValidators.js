export const attributeValidators = {
  name: nameValid,
}

function nameValid(recipe){
  return recipe.name && recipe.name.length > 0;
}
