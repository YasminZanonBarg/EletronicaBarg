import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

interface PrivateRouteProps {
  children: JSX.Element
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <div>Carregando...</div> 
  }

  return isAuthenticated ? children : <Navigate to="/" />
}
