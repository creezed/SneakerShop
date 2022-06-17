import styled from "styled-components";

const RadioWrapper = styled.label`
  position: relative;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border-radius: 50%;
  white-space: nowrap;
  cursor: pointer;
  
  border: 1px solid ${({ theme }) => theme.colors.gray800};
  z-index: ${({ theme }) => theme.zIndex.ui};
  transition: .1s ${({ theme }) => theme.transition.easeOut};
  :before {
    position: absolute;
    content: "";
    z-index: 9;
    width: 8px;
    height: 8px;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%) scale(0);
    visibility: hidden;
    opacity: 0;
    transition: .1s ${({ theme }) => theme.transition.easeOut};
  }
`

const RadioInput = styled.input`
  display: none;
  &:checked + label {
    background-color: ${({ theme }) => theme.colors.accentColor};
    border: 1px solid ${({ theme }) => theme.colors.accentColor};
  }
  &:checked + label:before {
    transform: translate(-50%, -50%) scale(1);
    visibility: visible;
    opacity: 1;
  }
`

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  user-select: none;
  cursor: pointer;
  touch-action: manipulation;
  :hover > * {
    border: 1px solid ${({ checked, theme }) => !checked ? theme.colors.accentColor : 'transparent'};
  }
`

export const Radio = ({ onChange, name, label, fz, checked, id }) => {
    return(
        <RadioLabel>
            <RadioInput id={id} name={name} type='radio' onChange={onChange}/>
            <RadioWrapper htmlFor={id} label={label} fz={fz} checked={checked}>
            </RadioWrapper>
            {label}
        </RadioLabel>
    )
}