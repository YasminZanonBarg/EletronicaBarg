import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { ServiceOrder } from './pages/GeralServiceOrder'

export function Router() {
    return(
        <Routes>
            <Route>
                <Route path='/' element={<Login />} />
                <Route path='/ServiceOrder' element={<ServiceOrder />} />
            </Route>
        </Routes>
    );
}