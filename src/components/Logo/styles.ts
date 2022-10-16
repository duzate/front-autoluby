import styled from 'styled-components';
import { themes } from '../../Global/styles/themes';

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  span {
    font-size: 38px;
    margin-left: 24px;
    color: ${themes.colors.primary_red};
    font-weight: 600;
  }
`;
