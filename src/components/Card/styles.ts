import styled from 'styled-components';
import { themes } from '../../Global/styles/themes';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px ${themes.colors.stroke};
  box-shadow: 0 0 6px ${themes.colors.stroke};
  margin-top: 20px;
  width: 800px;
  border-radius: 3px;
  cursor: pointer;
  transform: scale(1);
  transition: ease .1s;
  
  :hover{ 
    transition: ease .3s;
    transform: scale(1.03);
  }
`;

export const Info = styled.div`
  display: flex ;
  flex-direction: column;
  padding: 30px;
  flex: 1;
`;

export const Title = styled.h3`
  font-size: 26px;
  font-weight: 600;
  line-height: 39px;
  color: ${themes.colors.dack_gray};
`;

export const Subtitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  color: ${themes.colors.gray};
`;

export const Count = styled.span`
  font-size: 13px;
  font-weight: 700;
  line-height: 19.5px;
  text-align: right;
  color: ${themes.colors.primary_red};
  margin-top: 45px;
`;

export const Img = styled.div`
  height: 200px;
`;
