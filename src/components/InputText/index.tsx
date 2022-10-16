import { Container, Label, Input } from './styles'
type InputProps = {
  label: string,
  place: string,
  type?: string,
  riquered?: boolean
}

export const InputText = ({ label, place, ...rest }: InputProps) => {
  return (
    <Container {...rest} >
      <Label>
        {label}
      </Label>
      <Input placeholder={place} {...rest} />

    </Container>
  )
}
