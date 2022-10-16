import styled from "styled-components";
import { themes } from "../../Global/styles/themes";


type CheckboxProps = {
  checked?: boolean;
}

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const InputCheckbox = styled.label`  
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background-color: ${({ checked }: CheckboxProps) => checked ? themes.colors.primary_red : themes.colors.space_area};
  border: 1px solid ${themes.colors.primary_red};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  svg {
    display: ${({ checked }: CheckboxProps) => checked ? 'flex' : 'none'};
    width: 7px;
    height: 10px;
  }
`;

export const Text = styled.label`
  cursor: pointer;
  font-weight: 500;
  margin-left: 10px;
  color: ${themes.colors.primary_red};
`;
