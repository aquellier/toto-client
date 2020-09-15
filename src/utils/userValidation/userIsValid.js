export default function userIsValid(errors) {
  return !Object.values(errors).some(err => err)
}
