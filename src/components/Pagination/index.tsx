
import { useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { ButtonArrow, Container, Number } from './styles'

export const Pagination = () => {
  let [count, setCount] = useState(1);
  return (
    <Container>
      <ButtonArrow onClick={() => { count === 1 ? '' : setCount(count--) }}>
        <FiArrowLeft />
        <span>Anterior</span>
      </ButtonArrow>
      {
        <Number>
          {count}
        </Number>
      }
      <ButtonArrow onClick={() => { count === 1 ? '' : setCount(count++) }}>
        <span>Próximo</span>
        <FiArrowRight />
      </ButtonArrow>
    </Container>
  )
}
