
import styled from 'styled-components';
import { themes } from '../../Global/styles/themes';

export const Wrapper = styled.div`
  
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  padding: 31px 150px;
  box-shadow: 0px 2px 25px ${themes.colors.stroke};
  justify-content: space-around;
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

export const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 65px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Greeting = styled.div`
  h3 {
    font-size: 30px;
    font-weight: 600;
    line-height: 45px;
    color: ${themes.colors.dack_gray};
  }
  
  span {
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    text-align: right;
    color: ${themes.colors.gray};
    margin-top: 5px;
  }
`;
