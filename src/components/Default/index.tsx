import { ReactNode } from "react"
import { Header } from "../Header"
import { Main } from "../Main"
import { Container } from "./styles"

type DefaultProps = {
  title: string,
  subtitle?: string,
  children: ReactNode,
}
export const Default = ({ title, subtitle, children }: DefaultProps) => {
  return (
    <Container>
      <Header />
      <Main title={title} subtitle={subtitle} children={children} />
    </Container>
  )
}
