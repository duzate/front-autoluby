import styled from 'styled-components';
import { themes } from '../../Global/styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  
  h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.02em;
    text-align: left;
    color: ${themes.colors.dack_gray};
  }
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

export const Main = styled.table`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 30px 15px 0 30px;
`;
export const TableRow = styled.tr`
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: space-around;
`;

export const TableHeader = styled.thead`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: .8rem;
  height: 4rem;
  font-weight: 700;
  color: ${themes.colors.gray};
  background-color: ${themes.colors.input};
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 1rem;
  height: 100%;
  font-weight: 500;
  color: ${themes.colors.dack_gray};
`;

export const TableData = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
