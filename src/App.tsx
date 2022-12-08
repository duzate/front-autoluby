import { GlobalStyled } from "./Global/styles/global"
import AuthProvider, { AuthContext } from "./providers/Auth"
import Routes from "./routes"

function App() {
  return (
    <AuthProvider>
      <GlobalStyled />
      <Routes />
    </AuthProvider>
  )
}

export default App
