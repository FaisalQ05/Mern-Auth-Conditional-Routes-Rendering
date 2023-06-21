import React, { useEffect, useState } from "react"
import {
  useRefreshMutation,
  useSendLoginMutation,
} from "../features/auth/authApiSlice"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../features/auth/authSlice"
import PublicRoutes from "./PublicRoutes"
import PrivateRoutes from "./PrivateRoutes"
import { Route, Routes } from "react-router-dom"
import Loading from "../components/Loading"

const AppRoutes = () => {
  // console.log("app routes")
  const persist = JSON.parse(localStorage.getItem("persist"))
  const [reqSuccess, setReqSuccess] = useState(false)
  const [refresh, { isLoading }] = useRefreshMutation()

  const token = useSelector(selectCurrentToken)

  let routes

  useEffect(() => {
    // console.log("app route use effect")
    const verifyRefresh = async () => {
      try {
        await refresh()
      } catch (e) {
      } finally {
        setReqSuccess(true)
      }
    }
    if (persist) {
      verifyRefresh()
    }
    if (!persist) {
      setReqSuccess(true)
    }
  }, [])

  if (token) {
    // console.log("private routes")
    routes = <PrivateRoutes />
  } else {
    // console.log("public routes")
    routes = <PublicRoutes />
  }

  if ((persist && !reqSuccess) || isLoading) {
    return (
      <div className="bg-gray-900 text-gray-300 w-full h-screen flex justify-center items-center">
        <Loading />
      </div>
    )
  }

  // console.log({
  //   persist,
  //   reqSuccess,
  //   isLoading,
  //   isLoginLoading,
  //   isUninitialized,
  //   isSuccess,
  // })

  return (
    <Routes>
      <Route path="/*" element={routes} />
    </Routes>
  )
}

export default AppRoutes
