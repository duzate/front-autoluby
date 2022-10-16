
import { useState } from 'react';
import CheckIcon from '../../assets/check.svg'
import { CheckboxContainer, InputCheckbox, Text } from './styles'

type CheckboxProps = {
  text: string;
}

export const Checkbox = ({ text }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <CheckboxContainer onClick={handleCheckboxChange}>
      <InputCheckbox className='checkmark' checked={checked}>
        <img src={CheckIcon} alt="CheckIcon" />
      </InputCheckbox>
      <Text>{text}</Text>
    </CheckboxContainer>
  )
}
