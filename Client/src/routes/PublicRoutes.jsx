import React, { useEffect } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import Public from "../components/Public"
import Login from "../features/auth/Login"
import RedirectRoute from "./RedirectRoute"


const PublicRoutes = () => {
  // console.log("public routess")

  useEffect(()=>{
    // console.log("public route use effect")
  },[])
  return (
    <Routes>
      <Route index element={<Public />} />
      <Route path="login" element={<Login />} />
      <Route
        path="*"
        element={
          <RedirectRoute>
            <Login />
          </RedirectRoute>
        }
      />
    </Routes>
  )
}

export default PublicRoutes
