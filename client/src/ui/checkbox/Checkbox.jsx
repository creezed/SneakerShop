import styled from "styled-components";
import checkIcon from '../../assets/icon/Checkmark.svg'
import { forwardRef } from "react";

const CheckboxWrapper = styled.div`
  position: relative;
  min-width: 18px;
  min-height: 18px;
  border-radius: 5px;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.gray900};
  
  z-index: ${({ theme }) => theme.zIndex.ui};
  transition: .1s ${({ theme }) => theme.transition.easeOut};
  :before {
    position: absolute;
    content: "";
    z-index: 9;
    width: 10px;
    height: 10px;
    top: 50%;
    left: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: translate(-50%, -120%);
    visibility: hidden;
    opacity: 0;
    transition: .1s ${({ theme }) => theme.transition.easeOut};
    background-image: url(${checkIcon});
  }
`

const CheckboxLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: ${({ gap }) => gap};
  user-select: none;
  cursor: pointer;
  touch-action: manipulation;
  font-size: ${({ labelFz, theme }) => labelFz ? theme.fontSize[labelFz] : "18px"};
  
  :hover > label {
    border: 1px solid ${({ checked, theme }) => !checked ? theme.colors.accentColor : 'transparent'};
    &:before {
      background-color: ${({ checked, theme }) => !checked && theme.colors.accentColor};
    }
  }
`

const CheckboxInput = styled.input.attrs(({ value }) => ({
    value: value || '',
}))`
  
  display: none;
  &:checked + ${ CheckboxWrapper } {
    background-color: ${({ theme }) => theme.colors.accentColor};
    border: 1px solid ${({ theme }) => theme.colors.accentColor};
  }
  &:checked + ${ CheckboxWrapper }::before {
    transform: translate(-50%, -50%);
    visibility: visible;
    opacity: 1;
  }
`

export const Checkbox = forwardRef((props, ref) => {
    const { label, labelFz , fz, gap, onChange, value } = props

    return(
        <CheckboxLabel labelFz={labelFz} gap={gap}>
            <CheckboxInput ref={ref} value={value} type='checkbox' onChange={onChange}/>
            <CheckboxWrapper fz={fz}></CheckboxWrapper>
            {label}
        </CheckboxLabel>
    )
})
