import {
  createContext,
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
  useEffect,
  useState
} from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../hooks/useApi";

type UserProps = {
  id: string,
  name: string,
  email: string,
  avatar: string,
  bio: string
}

type ContextProps = {
  handleLogin: (e: FormEvent<Element>) => void
  handleLogout: () => void
  email: string,
  password: string,
  message: string[],
  emailVerified: boolean,
  passVerified: boolean,
  user: UserProps | null,
  setUser: Dispatch<SetStateAction<UserProps | null>>
  setEmail: Dispatch<SetStateAction<string>>,
  setPassword: Dispatch<SetStateAction<string>>
  setMessage: Dispatch<SetStateAction<string[]>>
  setEmailVerified: Dispatch<SetStateAction<boolean>>
  setPassVerified: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<ContextProps>(null!);

type ProviderProps = {
  children: ReactNode
}

const AuthProvider = ({ children }: ProviderProps) => {
  const api = useApi()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState<UserProps | null>(null!)
  const [message, setMessage] = useState<string[]>([''])
  const [emailVerified, setEmailVerified] = useState<boolean>(null!)
  const [passVerified, setPassVerified] = useState<boolean>(null!)


  useEffect(() => {
    const userStorage = localStorage.getItem('user')
    userStorage ? setUser(JSON.parse(userStorage)) : ''
    const tokenStorage = localStorage.getItem('token')
    tokenStorage ? api.authentication(tokenStorage) : ''
  }, [])

  const handleLogin = async (e: FormEvent<Element>) => {
    e.preventDefault()
    try {
      const response = await api.login(email, password)
      api.authentication(response.token)
      localStorage.setItem('token', response.token)
      localStorage.setItem('user', JSON.stringify(response.user))
      navigate('/')
      setMessage([''])
      setUser(response.user)
      setPassVerified(null!)
      setEmailVerified(null!)

    } catch (err: any) {
      err.response.data.error.errors
        ? setMessage(err.response.data.error.errors)
        : setMessage([err.response.data.error])
      setEmailVerified(false)
      setPassVerified(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null!)
    navigate('/login')

  }

  return (
    <AuthContext.Provider value={{
      handleLogin,
      handleLogout,
      email,
      setEmail,
      password,
      setPassword,
      message,
      setMessage,
      emailVerified,
      setEmailVerified,
      passVerified,
      setPassVerified,
      user,
      setUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
