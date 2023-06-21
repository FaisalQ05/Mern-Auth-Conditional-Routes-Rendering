import React from "react"
import { Navigate } from "react-router-dom"

const RedirectRoute = ({ children, redirect = "/login" }) => {
  return <Navigate to={redirect} replace={true} />
}

export default RedirectRoute
