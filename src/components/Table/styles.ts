import styled from 'styled-components';
import { themes } from '../../Global/styles/themes';

export const Container = styled.div`
  display: flex;
  border: 1px ${themes.colors.stroke};
  box-shadow: 0 0 6px ${themes.colors.stroke};
  margin-top: 20px;
  width: 100%;
  height: 100%;
  border-radius: 3px;  
  background: none;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  padding: 30px 15px 0 30px;
`;

export const HeaderEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25vw;
`;

export const SearchContainer = styled.div`
  display: flex;
  height: 40px;
  width: 210px;
`;

