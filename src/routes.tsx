import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Employees from './pages/Employees'

const routes = () => {
  return (
    <Routes>
      <Route path={'/login'} element={<Login />} />
      <Route path={'/'} element={<Home />} />
      <Route path={'/employees'} element={<Employees />} />


    </Routes>
  )
}

export default routes
