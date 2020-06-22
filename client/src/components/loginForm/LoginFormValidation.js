import { checkEmail, checkPassword } from 'utils/formValidators'

const validate = values => {
  const errors = {}
  const { email, password } = values

  // Check if email exists and if has proper format
  /* TODO: Disabled for development, no need to type `@.com` */
  // const emailError = checkEmail(email)
  // if (emailError) errors.email = emailError

  // Check if password exists
  const passwordError = checkPassword(password)
  if (passwordError) errors.password = passwordError

  return errors
}

export default validate
