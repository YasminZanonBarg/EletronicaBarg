import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { GeralServiceOrder } from './pages/GeralServiceOrder'

export function Router() {
    return(
        <Routes>
            <Route>
                <Route path='/' element={<Login />} />
                <Route path='/GeralServiceOrder' element={<GeralServiceOrder />} />
            </Route>
        </Routes>
    );
}