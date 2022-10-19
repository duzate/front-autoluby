import styled from 'styled-components';
import { themes } from '../../Global/styles/themes';

export const Container = styled.div`
  display: flex;  
  align-items: center;
  height: 100%;
  width: 100%;
  border: 1px solid ${themes.colors.stroke};
  padding: 12px;
  border-radius: 3px;
  background-color: ${themes.colors.input};

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: ${themes.colors.input};
  color: ${themes.colors.dack_gray};
  font-weight: 600;
`; 
