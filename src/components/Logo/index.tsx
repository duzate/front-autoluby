import { useNavigate } from 'react-router-dom';
import AutoLuby from '../../assets/autoluby.png';
import { Container } from './styles';

export const Logo = () => {
  const navigate = useNavigate();
  const login = window.location.pathname

  return (
    <Container onClick={() => { login === '/login' ? '' : navigate('/') }} cursor={login} >
      <img src={AutoLuby} alt="AutoLuby" />
      <span>AutoLuby</span>
    </Container>
  )
}
