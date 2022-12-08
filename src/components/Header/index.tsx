import { Button } from "../Button"
import { Logo } from "../Logo"
import { Search } from "../Search"

import { FiLogOut } from 'react-icons/fi'
import { Container, Logout, SearchContainer } from "./styles"
import { useAuth } from "../../hooks/useAuth"

export const Header = () => {
  const page = window.location.pathname
  const { handleLogout } = useAuth()
  return (
    <Container>
      <Logo />
      <SearchContainer>
        {page === '/'
          ? <Search />
          : ''
        }
      </SearchContainer>
      <Logout>
        <Button title="Sair" icon={FiLogOut} onClick={handleLogout} />
      </Logout>
    </Container>
  )
}
