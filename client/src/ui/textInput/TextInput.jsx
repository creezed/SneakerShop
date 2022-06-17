import { useState, forwardRef } from "react";
import styled, { css } from "styled-components";
import { themeTextInput } from './themeTextInput'
import { sizeInput } from "./sizeInput";
import { showError } from '../animations/showError';
import { colors, transition, fontWeight, fontSize } from "../../styles/themeAction";


const Input = styled.input.attrs(({ placeholder }) =>
    placeholder
)`
  width: 100%;
  min-width: 200px;
  outline: none;
  
  border-radius: ${({ borderR }) => borderR};
  height: ${({ size }) => size ? sizeInput[size] : '53px'};
  padding-left: ${({ leftIcon }) => leftIcon ? '44px' : '20px'};
  font-size: ${({ fz }) => fontSize[fz]};
  font-weight: ${({ fWeight }) => fontWeight[fWeight]};
  transition: .1s ${ transition.easeOut };
  color: ${ colors.gray900 };
  border: 1px solid ${ colors.gray200 };
  
  ${({ error }) => error ?
          css`
            background-color: ${ colors.accentColorLight };
            border: 1px solid ${ colors.accentColor };
            :hover,
            :focus
            {
              background-color: ${ colors.accentColorLightSecond };
            }
          `
          :
          css`
            background-color: ${ colors.white };
            :hover,
            :focus{
              background-color: ${ colors.gray100 };
            }
          `
  }
  
  ${({ placeholder }) => placeholder &&
    css`
      ::placeholder {
        color: inherit;
      }
    `
  }

`
const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const InputWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const InputMsg = styled.span`
  display: block;
  font-size: ${ fontSize.s };
  font-weight: ${ fontWeight.regular };
  padding-left: 4px;
`

const InputError = styled.span`
  display: block;
  font-size: ${ fontSize.xs };
  color: ${ colors.accentColorDart };
  animation: ${ showError } .1s ease-in 1 both;
  user-select: none;
`

const Icon = styled.picture`
  position: absolute;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  object-fit: cover;
  object-position: center;
  
  ${({ leftIcon }) => leftIcon ? css`left: 3%;` : css`right: 5%;`}
`

export const TextInput = forwardRef(({label, error, hint, theme, leftIcon, ...otherProps}, ref) => {
    const [ hidden, setHidden ] = useState(true)
    return(
        <InputLabel>
            {label &&
                <InputMsg>{ label }</InputMsg>
            }
            <InputWrapper>
                <Input
                    ref={ref}
                    type={ theme === "password" && hidden ? 'password' : 'text' }
                    {...otherProps}
                />
                {theme === "password" &&
                    <Icon  onClick={() => setHidden(!hidden)}>
                        {hidden
                            ?
                            <img src={ themeTextInput.withIcon.password.iconHidden } alt="hidden"/>
                            :
                            <img src={ themeTextInput.withIcon.password.iconVisible } alt="hidden"/>
                        }
                    </Icon>
                }
                {theme === "search" &&
                    <Icon leftIcon={ leftIcon }>
                        <img src={ themeTextInput.withIcon.search.icon } alt="hidden"/>
                    </Icon>
                }
            </InputWrapper>
            {error &&
                <InputError>{ hint }</InputError>
            }
        </InputLabel>
    )
})