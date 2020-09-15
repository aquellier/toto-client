import { attributeValidators } from './attributeValidators';

export default function userValidationErrors(recipe) {
  let errors = {};
  Object.keys(attributeValidators).forEach((validator) => {
    const validate = attributeValidators[validator]
    const isValid = validate(recipe)
    errors[validator] = !isValid
  })
  return errors
}
