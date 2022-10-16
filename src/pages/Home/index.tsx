import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Logo } from "../../components/Logo";
import { FiLogOut } from 'react-icons/fi'
import { categories } from "../../util/categories";
import { Container, Content, Greeting, Header, Logout, Main, Wrapper } from "./styles";
import { Search } from "../../components/Search";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Header>
          <Logo />
          <Search />
          <Logout>
            <Button title="Sair" onClick={() => navigate('/login')} icon={FiLogOut} />
          </Logout >
        </Header>
        <Main>
          <Content>
            <Greeting>
              <h3>
                Bem Vindo, {'Eduardo'}
              </h3>
              <span>Menu</span>
            </Greeting>
            {
              categories.map(category => (
                <Card
                  key={category.id}
                  title={category.title}
                  subtitle={category.subtitle}
                  count={category.count}
                  img={category.img}
                />
              ))
            }
          </Content>
        </Main>
      </Container>
    </Wrapper>
  )
}

export default Home;
