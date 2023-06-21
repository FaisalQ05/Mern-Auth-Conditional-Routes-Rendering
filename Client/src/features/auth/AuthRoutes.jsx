import React from "react"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "./authSlice"
import { Navigate, Outlet } from "react-router-dom"

const AuthRoutes = ({ redirect = "/dash", children }) => {
  const token = useSelector(selectCurrentToken)
  console.log(token)
  console.log({ children, redirect })

  if (token) {
    console.log("auth route cond 1")
    //if user logged in and have access token it will always redirect to dashboard
    //for login route and all other (*) routes
    //Any other route if have token will go to Dash
    return <Navigate to={redirect} replace />
  } else if (children) {
    console.log("auth route cond 2")
    //Any other route if not have token will go to login
    return <Navigate to={redirect} replace />
  } else {
    console.log("auth route cond 3")
    //Other public routes that will not redirect after auth user login
    //if user not logged in then it will show up
    return <Outlet />
  }
}

export default AuthRoutes
