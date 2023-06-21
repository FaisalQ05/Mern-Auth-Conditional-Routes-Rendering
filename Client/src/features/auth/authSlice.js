import { createSlice } from "@reduxjs/toolkit"
// import { authApiSlice } from "./authApiSlice"

const initialState = {
  token: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload
      state.token = accessToken
    },
    logOut: (state, action) => {
      state.token = null
    },
  },
})

export default authSlice.reducer
export const { setCredentials, logOut } = authSlice.actions
export const selectCurrentToken = (state) => state.auth.token
