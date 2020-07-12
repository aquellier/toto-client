import { attributeValidators } from './attributeValidators';

export default function recipeValidationErrors(recipe) {
  Object.keys(attributeValidators).reduce((errors, validator) => {
    errors[validator] = !attributeValidators[validator](recipe)
  }, {})
}
