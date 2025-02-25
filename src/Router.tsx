import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { GeralServiceOrder } from './pages/GeralServiceOrder'
import { RegisterServiceOrder } from './pages/RegisterServiceOrder'
import { GeralClient } from './pages/GeralClient'
import { RegisterClient } from './pages/RegisterClient'
import { Report } from './pages/Report'

export function Router() {
    return(
        <Routes>
            <Route>
                <Route path='/' element={<Login />} />
                <Route path='/GeralServiceOrder' element={<GeralServiceOrder />} />
                <Route path='/GeralServiceOrder/Register' element={<RegisterServiceOrder />} />
                <Route path='/GeralClient' element={<GeralClient />} />
                <Route path='/GeralClient/Register' element={<RegisterClient />} />
                <Route path='/Report' element={<Report />} />
            </Route>
        </Routes>
    );
}