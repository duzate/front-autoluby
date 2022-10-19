import { Button } from "../Button"
import { Logo } from "../Logo"
import { Search } from "../Search"

import { FiLogOut } from 'react-icons/fi'
import { Container, Logout, SearchContainer } from "./styles"
import { useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate = useNavigate();
  const page = window.location.pathname

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
        <Button title="Sair" icon={FiLogOut} onClick={() => navigate('/login')} />
      </Logout>
    </Container>
  )
}
