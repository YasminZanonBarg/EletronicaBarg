import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { GeralServiceOrder } from './pages/GeralServiceOrder'
import { RegisterServiceOrder } from './pages/RegisterServiceOrder'
import { EditServiceOrder } from './pages/EditServiceOrder'
import { GeralClient } from './pages/GeralClient'
import { RegisterClient } from './pages/RegisterClient'
import { EditClient } from './pages/EditClient'
import { Report } from './pages/Report'
import { PrivateRoute } from './auth/PrivateRoute'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/GeralServiceOrder" element={<PrivateRoute><GeralServiceOrder /></PrivateRoute>} />
      <Route path="/GeralServiceOrder/Register" element={<PrivateRoute><RegisterServiceOrder /></PrivateRoute>} />
      <Route path="/GeralServiceOrder/Edit" element={<PrivateRoute><EditServiceOrder /></PrivateRoute>} />
      <Route path="/GeralClient" element={<PrivateRoute><GeralClient /></PrivateRoute>} />
      <Route path="/GeralClient/Register" element={<PrivateRoute><RegisterClient /></PrivateRoute>} />
      <Route path="/GeralClient/Edit" element={<PrivateRoute><EditClient /></PrivateRoute>} />
      <Route path="/Report" element={<PrivateRoute><Report /></PrivateRoute>} />
    </Routes>
  )
}