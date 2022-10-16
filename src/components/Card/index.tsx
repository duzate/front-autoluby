import { ComponentType } from "react"
import { Container, Count, Img, Info, Subtitle, Title } from "./styles"

type CardProps = {
  title: string,
  subtitle: string,
  count: string,
  img: string
}

export const Card = ({ title, subtitle, count, img }: CardProps) => {
  return (
    <Container>
      <Info>
        <Title>
          {title}
        </Title>
        <Subtitle>
          {subtitle}
        </Subtitle>
        <Count>
          {count}
        </Count>
      </Info>
      <Img>
        <img src={img} alt="card" />
      </Img>
    </Container>
  )
}
