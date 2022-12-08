import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Employees from './pages/Employees'
import AllVehicles from './pages/AllVehicles'
import YoursVehicles from './pages/YoursVehicles'
import { RoutePrivete } from './providers/Routes'

const routes = () => {
  return (
    <Routes>
      <Route path={'/login'} element={<RoutePrivete><Login /></RoutePrivete>} />
      <Route path={'/'} element={<RoutePrivete><Home /></RoutePrivete>} />
      <Route path={'/employees'} element={<RoutePrivete><Employees /></RoutePrivete>} />
      <Route path={'/employees'} element={<RoutePrivete><Employees /></RoutePrivete>} />
      <Route path={'/vehicles'} element={<RoutePrivete><AllVehicles /></RoutePrivete>} />
      <Route path={'/vehicles/my'} element={<RoutePrivete><YoursVehicles /></RoutePrivete>} />
    </Routes>
  )
}

export default routes
