import styled from 'styled-components';
import { themes } from '../../Global/styles/themes';

type LogoStyleProps = {
  cursor: string
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ cursor }: LogoStyleProps) => cursor === '/login' ? '' : 'pointer'};
  
  span {
    font-size: 38px;
    margin-left: 24px;
    color: ${themes.colors.primary_red};
    font-weight: 600;
  }
`;
