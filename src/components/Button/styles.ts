import styled from 'styled-components';
import { themes } from '../../Global/styles/themes';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 38px;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  color: ${themes.colors.space_area};
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  background-color: ${themes.colors.primary_red};
  
  :hover {
    background-color: ${themes.colors.primary_hover};
  }
  
  :active {
    background-color: ${themes.colors.primary_hover};
    border: 1.5px solid ${themes.colors.primary_pressed}
  }
  
  svg {
    font-size: 18px;
  }
`;
