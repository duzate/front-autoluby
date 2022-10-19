import styled from 'styled-components';
import { themes } from '../../Global/styles/themes';

type MainStyleProps = {
  page: string,
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 90px;
  margin-top: 65px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding:${({ page }: MainStyleProps) => page === '/' ? '0 30vw' : '0 15vw'};
`;

export const Title = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: 600;
  line-height: 45px;
  color: ${themes.colors.dack_gray};
`;

export const Subtitle = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  color: ${themes.colors.gray};
  margin-top: 5px;
`;

