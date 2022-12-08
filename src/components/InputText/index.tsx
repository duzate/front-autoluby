import { InputHTMLAttributes } from 'react'

import { Container, Label, Input, InputContainer, ImgContainer } from './styles'

import CheckIcon from '../../assets/check.svg'
import ErrorIcon from '../../assets/error.svg'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string,
  type?: string,
  autoComplete?: string,
  verified?: boolean
}

export const InputText: React.FC<InputProps> = ({ label, verified, ...rest }) => {
  return (
    <Container >
      <Label>
        {label}
      </Label>
      <InputContainer verified={verified} {...rest}>
        <Input {...rest} />
        <ImgContainer verified={verified}>
          {
            verified
              ? <img src={CheckIcon} alt="check" />
              : verified === false
                ? <img src={ErrorIcon} alt="error" />
                : ''
          }

        </ImgContainer>
      </InputContainer>

    </Container>
  )
}
