import styled from 'styled-components';
import { themes } from '../../Global/styles/themes';


type PaginationStyleProps = {
  page?: boolean
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-self: center;
`;

export const ButtonArrow = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  background: none;
  font-size: 14px;
  font-weight: 600;
  color: ${themes.colors.gray};
  
  svg {
    margin: 0 5px;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const ContainerNumber = styled.ul`
  display: flex;
  margin: 0 5px;
`;

export const Number = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  width: 20px;
  margin: 0 5px;
  border-radius: 3px;
  color: ${({ page }: PaginationStyleProps) => page ? themes.colors.space_area : themes.colors.gray};
  background: ${({ page }: PaginationStyleProps) => page ? themes.colors.primary_red : themes.colors.space_area};
`;

