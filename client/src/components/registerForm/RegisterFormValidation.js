import {
  checkEmail,
  checkName,
  checkPassword,
  checkPasswordConfrim
} from 'utils/formValidators'

const validate = values => {
  let errors = {}

  const { email, name, password, passwordConfirm } = values

  // Email validation
  const emailError = checkEmail(email)
  if (emailError) errors.email = emailError
  // Name validation
  const nameError = checkName(name)
  if (nameError) errors.name = nameError

  // Password validation
  const passwordError = checkPassword(password)
  if (passwordError) errors.password = passwordError

  // Password confirmation validation
  const passwordConfirmError = checkPasswordConfrim(passwordConfirm, password)
  if (passwordConfirmError) errors.passwordConfirm = passwordConfirmError

  return errors
}

export default validate
