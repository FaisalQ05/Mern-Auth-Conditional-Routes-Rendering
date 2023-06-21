import React from "react"
import { Route, Routes } from "react-router-dom"
import RequireAuth from "../features/auth/RequireAuth"
import { ROLES } from "../config/roles"
import DashLayout from "../components/DashLayout"
import Welcome from "../features/auth/Welcome"
import NotesList from "../features/notes/NotesList"
import EditNote from "../features/notes/EditNote"
import NewNote from "../features/notes/NewNote"
import UsersList from "../features/users/UsersList"
import NewUser from "../features/users/NewUser"
import EditUser from "../features/users/EditUser"
import RedirectRoute from "./RedirectRoute"

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
        <Route path="*" element={<RedirectRoute redirect="/dash" />} />

        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />

          <Route path="notes">
            <Route index element={<NotesList />} />
            <Route path=":id" element={<EditNote />} />
            <Route path="new" element={<NewNote />} />
          </Route>

          <Route
            element={
              <RequireAuth allowedRoles={[ROLES.Admin, ROLES.Manager]} />
            }
          >
            <Route path="users">
              <Route index element={<UsersList />} />
              <Route path=":id" element={<EditUser />} />
              <Route path="new" element={<NewUser />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default PrivateRoutes
