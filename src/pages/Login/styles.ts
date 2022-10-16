
import styled from 'styled-components';
import { themes } from '../../Global/styles/themes';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerLeft = styled.div`
  display: flex;
  width: 50vw;
  flex-direction: column;
  padding: 70px 150px;
  background-color: ${themes.colors.space_area};
`;

export const Main = styled.div`
  display: flex;
  margin-top: 20%;
  justify-content: center;
`;

export const ContentLeft = styled.div`
  
  h3 {
  color: ${themes.colors.dack_gray};
  font-size: 38px;
  }
  
  p {
    color: ${themes.colors.light_gray};
    font-size: 12px;
    margin-bottom: 70px;
  }
  
  a {
    color: ${themes.colors.primary_red};
  }
`;


export const ContainerPass = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  span {
    font-weight: 500;
  }
`;

export const Register = styled.div`
  display: flex;
  margin: 40px 0;
  
  a {
    margin-left: 10px;
  }
`;

export const ContainerRight = styled.div`
    display: flex;
    width: 50vw;
    
    img {
      width: 100%;
      height: 100vh;
    }
`;

