import styled from 'styled-components';
import { themes } from '../../Global/styles/themes';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 3vw 15vw;
  box-shadow: 0px 2px 25px ${themes.colors.stroke};
  justify-content: space-between;
  align-items: center;
  height: 120px;
`;

export const Logout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 38px;
  width: 75px;
  border-radius: 3px;
 
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 420px;
`;

