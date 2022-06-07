import styled, { css } from "styled-components";
import { themeTextInput } from './themeTextInput'
import { sizeInput } from "./sizeInput";
import { showError } from '../animations/showError';
import { useState } from "react";

const Input = styled.input`
  width: 100%;
  min-width: 200px;
  outline: none;
  border-radius: ${({ borderR }) => borderR};
  height: ${({ size }) => size ? sizeInput[size] : '53px'};
  padding-left: ${({ leftIcon }) => leftIcon ? '44px' : '20px'};
  font-size: ${({ fz, theme }) => theme.fontSize[fz]};
  font-weight: ${({ fWeight, theme }) => theme.fontWeight[fWeight]};
  transition: .1s ${({ theme }) => theme.transition.easeOut};
  color: ${({ theme }) => theme.colors.gray900};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  
  ${({ error }) => error ?
          css`
            background-color: ${({ theme }) => theme.colors.accentColorLight};
            border: 1px solid ${({ theme }) => theme.colors.accentColor};
            :hover,
            :focus
            {
              background-color: ${({ theme }) => theme.colors.accentColorLightSecond};
            }
          `
          :
          css`
            background-color: ${({ theme }) => theme.colors.white};
            :hover,
            :focus{
              background-color: ${({ theme }) => theme.colors.gray100};
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
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  padding-left: 4px;
`

const InputError = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.accentColorDart};
  animation: ${showError} .1s ease-in 1 both;
  user-select: none;
`

const Icon = styled.picture`
  position: absolute;
  cursor: pointer;
  top: 50%;
  right: 5%;
  ${({ leftIcon }) => leftIcon &&
      css`
        left: 3%;
        right: auto;
      `
  }
  transform: translateY(-50%);
  object-fit: cover;
  object-position: center;
`

export const TextInput = ({ label, error, hint, theme, fz, fWeight, borderR, placeholder, leftIcon, size }) => {
    const [ hidden, setHidden ] = useState(true)

    return(
        <InputLabel>
            {label &&
                <InputMsg>{label}</InputMsg>
            }
            <InputWrapper>
                <Input
                    type={ theme === "password" && hidden ? 'password' : 'text' }
                    fz={fz}
                    fWeight={fWeight}
                    borderR={borderR}
                    placeholder={placeholder}
                    error={error}
                    leftIcon={leftIcon}
                    size={size}
                />
                {theme === "password" &&
                    <Icon  onClick={() => setHidden(!hidden)}>
                        {hidden
                            ?
                            <img src={themeTextInput.withIcon.password.iconHidden} alt="hidden"/>
                            :
                            <img src={themeTextInput.withIcon.password.iconVisible} alt="hidden"/>
                        }
                    </Icon>
                }
                {theme === "search" &&
                    <Icon leftIcon={leftIcon}>
                        <img src={themeTextInput.withIcon.search.icon} alt="hidden"/>
                    </Icon>
                }
            </InputWrapper>
            {error &&
                <InputError>{hint}</InputError>
            }
        </InputLabel>
    )
}
