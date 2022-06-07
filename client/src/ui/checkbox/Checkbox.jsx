import styled, {css} from "styled-components";
import checkIcon from '../../assets/icon/Checkmark.svg'

const CheckboxWrapper = styled.label`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.ui};
  min-width: 18px;
  min-height: 18px;
  background-color: ${({ checked, theme }) => checked ? theme.colors.accentColor : 'transparent'};
  border: 1px solid ${({ checked, theme }) => checked ? theme.colors.accentColor : theme.colors.gray800};
  border-radius: 5px;
  white-space: nowrap;
  cursor: pointer;
  transition: .1s ${({ theme }) => theme.transition.easeOut};
  :before {
    position: absolute;
    content: "";
    z-index: 9;
    width: 10px;
    height: 10px;
    top: 50%;
    left: 50%;
    background-image: url(${checkIcon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: translate(-50%, -120%);
    visibility: hidden;
    opacity: 0;
    transition: .1s ${({ theme }) => theme.transition.easeOut};
    ${({ checked }) => checked &&
        css`
          transform: translate(-50%, -50%);
          visibility: visible;
          opacity: 1;
        `
    }
  }
  
`

const CheckboxInput = styled.input`
    display: none;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap};
  user-select: none;
  cursor: pointer;
  touch-action: manipulation;
  :hover > * {
    border: 1px solid ${({ checked, theme }) => !checked ? theme.colors.accentColor : 'transparent'};
    &:before {
      background-color: ${({ checked, theme }) => !checked && theme.colors.accentColor};
    }
  }
`

export const Checkbox = (props) => {
    const { label, fz, checked, gap, onChange } = props
    return(
        <CheckboxLabel gap={gap}>
            <CheckboxWrapper checked={checked} fz={fz}>
                <CheckboxInput type='checkbox' onChange={onChange}/>
            </CheckboxWrapper>
            {label}
        </CheckboxLabel>
    )
}