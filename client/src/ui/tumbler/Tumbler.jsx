import styled, { css } from "styled-components";
import { colors, transition } from "../../styles/themeAction";

const TumblerWrapper = styled.label`
  position: relative;
  display: block;
  width: 50px;
  height: 22px;
  border-radius: 100px;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  
  transition: .1s ${ transition.easeOut };
  background-color: ${({ checked }) => checked ? colors.accentColor : 'transparent'};
  border: 1px solid ${({ checked }) => checked ? colors.accentColor : colors.gray200};
  :before {
    content: "";
    position: absolute;
    display: flex;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    top: 50%;
    transition: inherit;
    transform: translateY(-50%) translateX(20%);
    
    background-color: ${({ checked }) => checked ? colors.white : colors.gray200};
    ${({ checked }) => checked && css`transform: translateY(-50%) translateX(210%);`}
  }
  :hover {
    border: 1px solid ${({ checked }) => !checked ? colors.accentColor : 'transparent'};
    &:before {
      background-color: ${({ checked }) => !checked && colors.accentColor};
    }
  }
`
const TumblerInput = styled.input`
  display: none;
`

export const Tumbler = (props) => {
    const { checked, onChange } = props
    return(
        <TumblerWrapper {...props}>
            <TumblerInput type="checkbox" onChange={onChange}/>
        </TumblerWrapper>
    )
}
