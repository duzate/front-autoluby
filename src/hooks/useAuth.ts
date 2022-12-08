
import { useContext } from "react";
import { AuthContext } from '../providers/Auth'

export const useAuth = () => {
  const value = useContext(AuthContext);

  return value;
};
