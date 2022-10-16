import { Container } from "./styles"

type ButtonProps = {
  title: string,
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <Container>
      <span>
        {title}
      </span>
    </Container>
  )
}
