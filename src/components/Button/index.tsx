import { ComponentType } from "react";
import { Container } from "./styles"

type ButtonProps = {
  title: string;
  icon?: ComponentType;
  onClick?: () => void;
}

export const Button = ({ title, icon: Icon, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      <span>
        {title}
      </span>
      {Icon && <Icon />}
    </Container>
  )
}
