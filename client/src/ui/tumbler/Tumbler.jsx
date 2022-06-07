import styled, {css} from "styled-components";

const TumblerWrapper = styled.label`
  position: relative;
  display: block;
  width: 50px;
  height: 22px;
  background-color: ${({ checked, theme }) => checked ? theme.colors.accentColor : 'transparent'};
  border: 1px solid ${({ checked, theme }) => checked ? theme.colors.accentColor : theme.colors.gray200};
  border-radius: 100px;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  transition: .1s ${({ theme }) => theme.transition.easeOut};
  :before {
    content: "";
    position: absolute;
    display: flex;
    width: 15px;
    height: 15px;
    background-color: ${({ checked, theme }) => checked ? theme.colors.white : theme.colors.gray200};
    border-radius: 100%;
    top: 50%;
    transition: inherit;
    transform: translateY(-50%) translateX(20%);
    ${({ checked }) => checked && 
        css`
          transform: translateY(-50%) translateX(210%);
        `
    }
  }
  :hover {
    border: 1px solid ${({ checked, theme }) => !checked ? theme.colors.accentColor : 'transparent'};
    &:before {
      background-color: ${({ checked, theme }) => !checked && theme.colors.accentColor};
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
