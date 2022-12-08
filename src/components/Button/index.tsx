import { ButtonHTMLAttributes, ComponentType } from "react";
import { Container } from "./styles"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  icon?: ComponentType;
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
