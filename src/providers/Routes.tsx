import { useAuth } from "../hooks/useAuth"
import Home from "../pages/Home";
import Login from "../pages/Login"

export const RoutePrivete = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();

  return !user ? <Login /> : children
}
