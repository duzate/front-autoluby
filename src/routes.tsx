import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

const routes = () => {
  return (
    <Routes>
      <Route path={'/login'} element={<Login />} />
    </Routes>
  )
}

export default routes
