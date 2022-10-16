import AutoLuby from '../../assets/autoluby.png';
import { Container } from './styles';

export const Logo = () => {
  return (
    <Container>
      <img src={AutoLuby} alt="AutoLuby" />
      <span>AutoLuby</span>
    </Container>
  )
}
