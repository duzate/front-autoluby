import { ChangeEvent, useState } from 'react';

import { Link } from 'react-router-dom'
import * as yup from 'yup';

import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { InputText } from '../../components/InputText';
import { Checkbox } from '../../components/InputCheckbox';

import Auto from '../../assets/auto.png'
import { Wrapper, Container, ContainerLeft, Main, ContainerRight, ContainerPass, ContentLeft, Register } from './styles'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailVerified, setEmailVerified] = useState<boolean>()
  const [passVerified, setPassVerified] = useState<boolean>()

  const emailSchema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required()
  })

  const passSchema = yup.object().shape({
    password: yup
      .string()
      .min(8)
      .required()
  })

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
                  place={'@mail.com'}
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
                  place={'senha'}
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
              </form>
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
