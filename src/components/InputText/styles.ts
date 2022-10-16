import styled from 'styled-components'
import { themes } from '../../Global/styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${themes.colors.gray};
  line-height: 16.8px;
`;

export const Input = styled.input`
  width: 425px;
  height: 36px;
  border-radius: 3px;
  border: 1px solid ${themes.colors.stroke};
  background-color: ${themes.colors.input};
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 30px;
  color: ${themes.colors.gray};
  
  ::placeholder {
    color: ${themes.colors.light_gray};
    font-size: 14px;
    font-weight: 400;
  }
`;
