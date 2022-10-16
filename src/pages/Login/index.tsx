import { Link } from 'react-router-dom'

import { Logo } from '../../components/Logo';
import { InputText } from '../../components/InputText';
import { Checkbox } from '../../components/InputCheckbox';

import Auto from '../../assets/auto.png'
import { Wrapper, Container, ContainerLeft, Main, ContainerRight, ContainerPass, ContentLeft, Register } from './styles'
import { Button } from '../../components/Button';

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <ContainerLeft>
          <Logo />
          <Main>
            <ContentLeft>
              <h3>Bem-vindo à AutoLuby</h3>
              <p>Faça o login para acessar sua conta</p>
              <InputText label={'Endereço de email'} place={'@mail.com'} type='email' riquered />
              <InputText label={'Senha'} place={'senha'} type='password' />
              <ContainerPass>
                <Checkbox text='Lembre minha senha' />
                <Link to={''}>
                  <span>Esqueceu a senha?</span>
                </Link>
              </ContainerPass>
              <Button title='Entrar' />
              <Register>
                <span>
                  Ainda não tem uma conta?
                </span>
                <Link to={''}>
                  Criar conta
                </Link>
              </Register>
            </ContentLeft>
          </Main>
        </ContainerLeft>
      </Container>
      <ContainerRight>
        <img src={Auto} alt="AutoLuby" />
      </ContainerRight>
    </Wrapper>
  )
}

export default Login;
