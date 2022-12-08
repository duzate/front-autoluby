import { ChangeEvent, useEffect } from 'react';

import { Link, redirect, useNavigate, } from 'react-router-dom'

import Auto from '../../assets/auto.png'
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { InputText } from '../../components/InputText';
import { Checkbox } from '../../components/InputCheckbox';

import { useAuth } from '../../hooks/useAuth';
import { emailSchema, passSchema } from '../../validation';
import {
  Wrapper,
  Container,
  ContainerLeft,
  Main,
  ContainerRight,
  ContainerPass,
  ContentLeft,
  Register,
  Message
} from './styles'

const Login = () => {
  const {
    handleLogin,
    user,
    setEmail,
    setPassword,
    email, password,
    message,
    emailVerified,
    passVerified,
    setEmailVerified,
    setPassVerified
  } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      return navigate("/");
    }
  }, [user]);

  return (
    <Wrapper>
      <Container>
        <ContainerLeft>
          <Logo />
          <Main>
            <ContentLeft>
              <h3>Bem-vindo à AutoLuby</h3>
              <p>Faça o login para acessar sua conta</p>
              <form>

                <InputText
                  label={'Endereço de email'}
                  placeholder={'@mail.com'}
                  type='email'
                  autoComplete='email'
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value)
                  }}
                  onBlur={() => emailSchema
                    .isValid({ email })
                    .then(valid => {
                      valid ? setEmailVerified(true) : setEmailVerified(false)
                    })}
                  verified={emailVerified}
                />
                <InputText
                  label={'Senha'}
                  placeholder={'senha'}
                  type='password'
                  autoComplete='current-password'
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setPassword(event.target.value)
                  }}
                  onBlur={() => passSchema
                    .isValid({ password })
                    .then(valid => {
                      valid ? setPassVerified(true) : setPassVerified(false)
                    })}
                  verified={passVerified}
                />
                <Message>
                  {
                    message.map(erro => (
                      <p key={erro}>{erro}</p>
                    ))
                  }
                </Message>
                <ContainerPass>
                  <Checkbox text='Lembre minha senha' />
                  <Link to={''}>
                    <span>Esqueceu a senha?</span>
                  </Link>
                </ContainerPass>
                <Button title='Entrar' onClick={handleLogin} />
              </form>
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
