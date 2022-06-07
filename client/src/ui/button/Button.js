import styled, { css } from "styled-components";
import { themeBtn } from './themeBtn'
import { sizeBtn } from './sizeBtn'


const Button = styled.button`
  font-family: ${({ theme }) =>theme.font.notoSans };
  position: relative;
  border: 1px solid ${({ variant }) => themeBtn[variant].border};
  border-radius: ${({ borderR }) => borderR};
  user-select: none;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  height: ${({ size }) => sizeBtn[size].height};
  background-color: ${({ variant }) => themeBtn[variant].bg};
  color: ${({ variant }) => themeBtn[variant].TextColor};
  transform: scale(1);
  transition: .1s ${({ theme }) => theme.transition.easeOut};
  font-size: ${({ size }) => sizeBtn[size].fz};
  padding: 0 15px;
  
  ${({ width }) => width === "max" 
          ?
          css`
            width: 100%;
          `
          :
          css`
            max-width: 100%;
          `
  }
  
  ${({ disabled }) => disabled && 
      css`
        background-color: ${({ theme }) => theme.colors.gray200};
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
    outline-color: ${({ theme }) => theme.colors.accentColorDart};
  }
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
  ${({ leftIcon }) => leftIcon &&
          css`
            ::before {
              left: 10%;
              background-image: url(${leftIcon});
              transform: translateY(-50%) rotate(180deg);
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