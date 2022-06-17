import styled from "styled-components";
import { colors } from "../../styles/themeAction";

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: transparent;
  user-select: none;
  ${({ theme }) => theme.getTransition(.1, ['background-color'], 'ease-out')}
  :hover {
    background-color: ${colors.border};
  }

  :active {
    background-color: ${colors.gray200};
  }
`