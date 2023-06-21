import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import DashLayout from "./components/DashLayout"
import Layout from "./components/Layout"
import Public from "./components/Public"
import { ROLES } from "./config/roles"
import Login from "./features/auth/Login"
import PersistLogin from "./features/auth/PersistLogin"
import RequireAuth from "./features/auth/RequireAuth"
import Welcome from "./features/auth/Welcome"
import EditNote from "./features/notes/EditNote"
import NewNote from "./features/notes/NewNote"
import NotesList from "./features/notes/NotesList"
import EditUser from "./features/users/EditUser"
import NewUser from "./features/users/NewUser"
import UsersList from "./features/users/UsersList"
import useTitle from "./hooks/useTitle"
import AuthRoutes from "./features/auth/AuthRoutes"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  useTitle("Notes App")
  
  return (
    <Routes>
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  )
}

export default App
