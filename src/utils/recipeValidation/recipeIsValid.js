export default function recipeIsValid(errors) {
  return !Object.values(errors).some(err => err)
}
