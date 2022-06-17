import styled from "styled-components";

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  gap: 10.6rem;
  @media ${({ theme }) => theme.media.extraLarge} {
    gap: 5rem;
  }
  @media ${({ theme }) => theme.media.large} {
    justify-content: center;
  }
`

export const AuthForm = styled.form`
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  @media ${({ theme }) => theme.media.extraLarge} {
    width: 80%;
  }
  @media ${({ theme }) => theme.media.medium} {
    flex-basis: 100%;
  }
`

export const SidePicture = styled.div`
  flex-basis: 50%;
  position: relative;
  min-width: 523px;
  min-height: 523px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray900};
  pointer-events: none;
  & > img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(1.2);
  }
  @media ${ ({ theme }) => theme.media.extraLarge } {
    min-width: 423px;
    min-height: 423px;
    max-width: 423px;
    max-height: 423px;
    & > img {
      transform: translate(-50%,-50%) scale(1.1);
    }
  }
  @media ${({ theme }) => theme.media.large} {
    display: none;
  }
`

export const AuthFooter = styled.div`
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Divider = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 1px;
`

export const Close = styled.svg`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-bottom: 12px;
`

export const ForgotPassword = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media ${({ theme }) => theme.media.large} {
    flex-direction: column;
  }
`