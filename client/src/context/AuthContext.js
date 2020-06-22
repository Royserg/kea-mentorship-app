import { createContext } from 'react'

const AuthContext = createContext({
  token: null,
  userEmail: null,
  login: (token, userEmail) => { },
  logout: () => { }
})

export default AuthContext