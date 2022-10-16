import styled from 'styled-components'
import { themes } from '../../Global/styles/themes';

type InputProps = {
  verified?: boolean
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${themes.colors.gray};
  line-height: 16.8px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 3px;
  padding: 0px 15px;
  border: 1px solid ${({ verified }: InputProps) => verified ? themes.colors.confirmation : verified === false ? themes.colors.error : themes.colors.stroke};
`

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ verified }: InputProps) => verified ? themes.colors.confirmation : verified === false ? themes.colors.error : 'none'};;
  width: 14px;
  height: 14px;
  border-radius: 50%;

  img {
    height: 10px;
    width: 10px;
  }
`

export const Input = styled.input`
  padding: 10px 0px;
  width: 100%;
  height: 36px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  color: ${themes.colors.gray};

  ::placeholder {
    color: ${themes.colors.light_gray};
    font-size: 14px;
    font-weight: 400;
  }
`;
