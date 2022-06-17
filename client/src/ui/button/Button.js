import styled, { css } from "styled-components";
import { font, colors } from "../../styles/themeAction";
import { themeBtn } from './themeBtn'
import { sizeBtn } from './sizeBtn'


const Button = styled.button.attrs(({type}) => ({
    type: type || 'button'
}))`
  font-family: ${ font.notoSans };
  position: relative;
  user-select: none;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  transform: scale(1);
  padding: 0 15px;
  
  height:  ${({ size }) => size ? sizeBtn[size].height : sizeBtn.m.height};
  font-size: ${({ fz }) => fz};
  background-color: ${({ variant }) => variant ? themeBtn[variant].bg : themeBtn.fill.bg};
  color: ${({ variant }) => variant ? themeBtn[variant].TextColor : themeBtn.fill.TextColor};
  border: 1px solid ${({ variant }) => variant ? themeBtn[variant].border : themeBtn.fill.border};
  border-radius: ${({ borderR }) => borderR ? borderR : '16px'};
  ${({ BtnWidth }) => BtnWidth === "max" ? css`width: 100%;` : css `max-width: 100%;`}


  ${({ theme }) => theme.getTransition(.1,[
    'background-color',
    'color',
    'border',
    'transform'
  ],'ease-out')};
  
  ${({ disabled }) => disabled && 
      css`
        background-color: ${colors.gray200};
        pointer-events: none;
      `
  }
  
  :hover {
    background-color: ${({ variant }) => themeBtn[variant].hover.bg};
  }
  
  :active {
    transform: scale(.95);
    background-color: ${({ variant }) => themeBtn[variant].active.bg};
  }
  :focus {
    outline-color: ${colors.accentColor};
  }
  
  ${({ leftIcon, rightIcon}) => (leftIcon || rightIcon) &&
      css`
        ::before,
        ::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 16px;
          height: 12px;
          background-color: transparent;
          transform: translateY(-50%);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `
  }
  
  ${({ leftIcon }) => leftIcon &&
          css`
            ::before {
              left: 10%;
              transform: translateY(-50%) rotate(180deg);
              background-image: url(${leftIcon});
            }
        `
  }
  ${({ rightIcon }) => rightIcon &&
          css`
            ::before {
              right: 10%;
              background-image: url(${rightIcon});
            }
        `
  }
`

export default Button;