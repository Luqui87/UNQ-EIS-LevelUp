import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || sessionStorage.getItem('token'))
  const [username, setUsername] = useState(localStorage.getItem('username') || sessionStorage.getItem('username'))

  return (
    <AuthContext.Provider value={{ token, setToken, username, setUsername }}>
      {children}
    </AuthContext.Provider>
  )
}
