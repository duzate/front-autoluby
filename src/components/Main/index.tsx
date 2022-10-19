import { ReactNode } from "react"
import { Container, Content, Subtitle, Title } from "./styles"

type MainProps = {
  title: string,
  subtitle?: string,
  children: ReactNode
}

export const Main = ({ title, subtitle, children }: MainProps) => {
  const page = window.location.pathname
  return (
    <Container>
      <Content page={page} >
        <Title>
          {title}
        </Title>
        <Subtitle>
          {subtitle}
        </Subtitle>
        {children}
      </Content>
    </Container>
  )
}
