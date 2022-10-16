import { ChangeEvent } from 'react'

import { Container, Label, Input, InputContainer, ImgContainer } from './styles'

import CheckIcon from '../../assets/check.svg'
import ErrorIcon from '../../assets/error.svg'

type InputProps = {
  label: string,
  place: string,
  type?: string,
  autoComplete?: string,
  verified?: boolean,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void
}

export const InputText: React.FC<InputProps> = ({ label, place, verified, ...rest }) => {
  return (
    <Container >
      <Label>
        {label}
      </Label>
      <InputContainer verified={verified} {...rest}>
        <Input placeholder={place} {...rest} />
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
