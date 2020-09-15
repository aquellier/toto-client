export const attributeValidators = {
  first_name: firstNameValid,
  last_name: lastNameValid,
  email: emailValid,
  password: passwordValid
}

function firstNameValid(user) {
  return user.first_name && user.first_name.length > 2
}

function lastNameValid(user) {
  return user.last_name && user.last_name.length > 2
}

function emailValid(user) {
  return user.email && user.email.length > 8;
}

function passwordValid(user) {
  return user.password && user.password.length > 8;
}
