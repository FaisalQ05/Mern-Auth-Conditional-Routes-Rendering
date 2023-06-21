import React, { createContext, useContext, useState } from "react"
import { useGetUserQuery } from "../features/auth/authApiSlice"

const AuthenticationContext = createContext(null)
export const getAuthContext = () => useContext(AuthenticationContext)

console.log("authcontext")

const Authcontext = ({ children }) => {
  const [userSession, setUserSession] = useState(false)
  const { data, error, isLoading, isSuccess, isError } = useGetUserQuery()
  console.log({data,error,isSuccess,isError,isLoading})
  const value = {data}
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export default Authcontext
