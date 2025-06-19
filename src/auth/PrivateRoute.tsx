import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

interface PrivateRouteProps {
  children: JSX.Element
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? children : <Navigate to="/" />
}