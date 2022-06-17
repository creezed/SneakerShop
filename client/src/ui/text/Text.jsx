import styled, {css} from "styled-components";
import { colors, fontWeight, fontSize, font } from "../../styles/themeAction";

const ElementType = ({as: ElementType = 'span'}) => {
    return <ElementType/>
}

const StyledText = styled(ElementType)`
  ${({ overflow }) => overflow === 'ellipsis' && 
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `
  }
  line-height: normal;
  font-family: ${({ fontFamily }) => fontFamily ? font[fontFamily] : font.notoSans};
  font-size: ${({ typography }) => typography ? fontSize[typography] : fontSize.l};
  font-weight: ${({ weight }) => weight ? fontWeight[weight] : fontWeight.medium};
  color: ${({ TextColor }) => TextColor ? colors[TextColor] : colors.gray900};
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Icon = styled.svg`
  width: 50px;
  height: 50px;
  fill: none;
  transform: rotate(45deg);
`

const Text = ({ leftIcon, children ,...otherProps}) => {
    return(
        <>
            {leftIcon ?
                <IconWrapper>
                        <Icon viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_15_16)">
                                <path d="M5.1341 9.93715C4.64932 10.1938 4.45943 10.631 4.45943 11.4391C4.45943 13.1976 4.02225 15.8875 2.94818 20.7922C2.12091 24.6037 1.66459 27.1704 1.51248 28.9196C1.46489 29.5467 1.41729 31.6477 1.41729 33.577C1.41729 37.7688 1.3697 37.5598 2.47223 38.1206C3.56544 38.6721 5.34263 39.0617 7.97605 39.3281C10.3048 39.5563 13.9642 39.6132 26.274 39.6132H39.2963L44.0872 38.0259C47.9557 36.733 48.9252 36.3817 49.1441 36.1722C49.6288 35.6874 49.6195 34.9744 49.1249 34.4803C48.5832 33.948 48.6308 33.9386 43.5931 35.6113L38.9828 37.1511L24.411 37.1128C14.1168 37.0843 9.50644 37.0465 8.73658 36.9607C6.58844 36.7418 4.78229 36.4376 4.12627 36.1908L3.88879 36.0956L3.88879 34.3847C3.88879 33.4436 3.91724 32.6737 3.96484 32.6737C4.00311 32.6737 4.50654 32.7782 5.07718 32.9112C7.66251 33.4813 7.24446 33.472 24.2304 33.5098C40 33.5383 42.2143 33.5098 44.4861 33.1869C47.1289 32.8258 48.9919 32.0937 49.3815 31.267C49.5243 30.9628 49.5336 30.8205 49.4483 30.2307C49.1823 28.3867 47.8134 26.9324 46.0072 26.5904C45.7221 26.5428 44.0872 26.4952 42.3287 26.4952C38.9161 26.4952 38.8969 26.4952 36.9676 25.9251C34.9525 25.3265 32.8519 24.3471 31.0266 23.1592C30.4565 22.7882 29.9717 22.4747 29.9619 22.4654C29.9526 22.456 30.0002 22.2755 30.0762 22.0566C30.295 21.4389 30.0478 20.8589 29.4393 20.5454C29.2779 20.46 28.8785 20.4124 28.3461 20.4124H27.5002L27.0915 19.9944L26.6828 19.5763L26.8918 19.2912C27.1577 18.9394 27.1769 18.3408 26.9487 17.989C26.6445 17.5234 26.2549 17.3713 25.3992 17.3713H24.62L24.3349 17.0194L24.0498 16.6775L24.3256 16.4208C24.8388 15.9361 24.7819 15.0141 24.2019 14.5769C23.9831 14.4155 23.7456 14.3679 23.0518 14.3296L22.1676 14.282L21.4738 13.4263C20.0288 11.6393 18.7457 10.4892 17.6716 10.0328L17.1491 9.814L11.3033 9.78554C5.77099 9.76591 5.43831 9.77572 5.1341 9.93715ZM17.1491 12.5132C17.8051 12.8841 18.7933 13.9582 20.4665 16.0872C22.8712 19.148 24.1166 20.5454 25.9414 22.2563C29.0591 25.1743 33.1846 27.4746 37.0913 28.4917L37.9181 28.7101V29.8887V31.0579H23.8599C14.6207 31.0579 9.37396 31.0197 8.57515 30.9534C7.08303 30.8298 5.49523 30.5638 4.58308 30.2881C3.76563 30.0408 3.8039 30.1836 4.03157 28.2538C4.22146 26.6095 4.52567 24.9555 5.31467 21.3628C6.32201 16.7241 6.68363 14.7089 6.80679 13.0171L6.8637 12.2374H11.7684H16.6731L17.1491 12.5132ZM46.0641 29.1664C46.492 29.3754 47.0052 29.9932 46.8723 30.1267C46.5872 30.4117 43.6687 30.8965 41.5112 31.0202L40.3896 31.0864V30.0217V28.9667H43.0225C45.5033 28.9667 45.6745 28.9765 46.0641 29.1664Z" fill="#404040"/>
                                <path d="M10.9323 15.9542C8.76503 16.3821 7.21551 18.5965 7.57713 20.7637C7.9574 23.0733 10.1625 24.6989 12.4156 24.3284C14.7252 23.9482 16.3508 21.7431 15.9803 19.49C15.5804 17.0945 13.29 15.4881 10.9323 15.9542ZM12.8052 18.6249C13.9269 19.3756 13.8032 21.1533 12.5864 21.7426C12.0064 22.0277 11.2841 21.9801 10.7517 21.619C9.64922 20.8967 9.75373 19.119 10.9416 18.5204C11.503 18.2353 12.2728 18.2829 12.8052 18.6249Z" fill="#404040"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_15_16">
                                    <rect width="49.0668" height="49.0668" fill="white" transform="translate(0.926636 0.162048)"/>
                                </clipPath>
                            </defs>
                        </Icon>
                    <StyledText {...otherProps}>
                        { children }
                    </StyledText>
                </IconWrapper>
                :
                <StyledText {...otherProps}>
                    { children }
                </StyledText>
            }
        </>
    )
}

export default Text