import styled, { css } from "styled-components";
import { useState } from "react";
import { colors, zIndex, transition } from "../../styles/themeAction";

const CustomSelect = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  height: 50px;
  border-radius: 15px;
  cursor: pointer;
  padding: 16px;
  user-select: none;
  
  border: 1px solid ${({ isActive }) => isActive ? colors.accentColor : colors.border};
  z-index: ${zIndex.select};
  transition: .1s ${transition.easeOut};
  ${({ boxShadow }) => boxShadow &&
    css`
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
    `
  }
`

const SelectContent = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  width: 100%;
  background-color: inherit;
  border-radius: 5px 5px 15px 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.04);
  opacity: 0;
  transition: 1s ${transition.easeOut};
  ${({ isActive }) => isActive && 
      css`
        opacity: 1;
      `
  }}
`

const SelectItem = styled.li`
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  :first-child {
    border-radius: 5px 5px 0 0;
  }
  :last-child {
    border-radius: 0 0 15px 15px;
  }
  :hover {
    background-color: ${colors.gray100};
  }
  ${({ disabled }) => disabled && 
    css`
      pointer-events: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
    `
  }
`

const SelectText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SelectSvg = styled.svg`
  transition: .3s ${ transition.easeOut };
  transform: rotate(180deg);
  ${({ isActive }) => isActive &&
          css`
            transform: rotate(0deg);
          `
  }
`

export const Select = ({ setSelectValue, options, defaultValue = 'Сортировать по', boxShadow }) => {
    const [ isActive, setIsActive ] = useState(false)
    const [ selectText, setSelectText ] = useState(defaultValue)

    const handleSelect = (option) => {
        setSelectText(option.content)
        setSelectValue(() => option.value)
    }

    return(
        <CustomSelect boxShadow={boxShadow} isActive={isActive} onClick={() => setIsActive(!isActive)}>
            <SelectText>
                <span>{selectText}</span>
                <SelectSvg isActive={isActive} width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.5L9 1.5L1 9.5" stroke="black"/>
                </SelectSvg>
            </SelectText>

            {isActive &&
                <SelectContent isActive={isActive}>
                    <SelectItem disabled >{defaultValue}</SelectItem>
                    {options.map(option =>
                        <SelectItem onClick={() => handleSelect(option)} key={option.value} >{option.content}</SelectItem>
                    )}
                </SelectContent>
            }
        </CustomSelect>
    )
}