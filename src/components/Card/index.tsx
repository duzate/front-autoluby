import { ComponentType } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Count, Img, Info, Subtitle, Title } from "./styles"

type CardProps = {
  title: string,
  subtitle: string,
  count: string,
  img: string,
  link: string,
}

export const Card = ({ title, subtitle, count, img, link }: CardProps) => {
  const navigate = useNavigate()
  console.log(link);

  return (
    <Container onClick={() => navigate(`${link}`)}>
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
