export const checkEmail = email => {
  if (!email) {
    return 'Email address is required'
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return 'Invalid email address'
  }
}

export const checkName = name => {
  if (!name) {
    return 'Name is required'
  }
}

export const checkPassword = password => {
  if (!password) {
    return 'Password is required'
  }
}

export const checkPasswordConfrim = (passwordConfirm, password) => {
  if (!passwordConfirm) {
    return 'Password confirmation is required'
  } else if (passwordConfirm !== password) {
    return "Passwords don't match"
  }
}
