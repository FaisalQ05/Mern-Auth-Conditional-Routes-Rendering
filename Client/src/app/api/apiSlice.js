import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { logOut, setCredentials } from "../../features/auth/authSlice"

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://notes-app-backend-mern.vercel.app",
  baseUrl: "http://localhost:3500",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  // console.log("fetch base query")
  let result = await baseQuery(args, api, extraOptions)
  if (result?.error?.status === 403) {
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions)
    if (refreshResult?.data) {
      api.dispatch(setCredentials({ ...refreshResult.data }))
      result = await baseQuery(args, api, extraOptions)
    } else {
      if (refreshResult?.error?.status === 403) {
        api.dispatch(logOut())
      }
      if (refreshResult?.error?.status === 401) {
        api.dispatch(logOut())
        // refreshResult.error.data.message = "Back to Login"
      }
      return refreshResult
    }
  }

  return result
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Note"],
  endpoints: (builder) => ({}),
})