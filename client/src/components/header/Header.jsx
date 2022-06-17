import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { TextInput } from "../../ui/textInput/TextInput";

import { useWindowWidthAndHeight } from '../../hook/useWindowWidthAndHeight';
import NavBar from "./NavBar";
import { colors } from "../../styles/themeAction";
import { useState } from "react";
import { Backdrop } from "../../ui/backdrop/backdrop";


const HeaderWrapper = styled.header`
  height: ${({ theme }) => theme.sizes.header.height};
  font-family: ${({ theme }) => theme.font.lato};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 2px;
`

const Logo = styled(Link)`
  max-width: 90px;
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: #000;
  text-transform: uppercase;
`

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

const Navigate = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`

const NavigateItem = styled(NavLink)`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.gray900};
  transition: .2s ${({ theme }) => theme.transition.easeOut};
  :hover {
    color: ${({ theme }) => theme.colors.accentColorDart};
  }
`

const SearchWrapper = styled.div`
  max-width: 230px;
`

const IconWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Icon = styled.svg`
  cursor: pointer;
  width: 25px;
  height: 25px;
`

const Menu = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
`

const MenuItem = styled.span`
  height: 2px;
  width: 100%;
  border-radius: 1px;
  background-color: ${colors.accentColor};
  pointer-events: none;
`

const Header = () => {
    const [ hidden, setHidden ] = useState(false)
    const [ width ] = useWindowWidthAndHeight();

    return (
        <HeaderWrapper>

            { width > 1000 ?
                <>
                    <Logo to="/">sneaker shop.</Logo>
                    <RightSide>
                        <Navigate>
                            <NavigateItem to={'/category'}>Мужчины</NavigateItem>
                            <NavigateItem to={'/category'}>Женщины</NavigateItem>
                            <NavigateItem to={'/category'}>Дети</NavigateItem>
                            <NavigateItem to={'/category'}>Скидки</NavigateItem>
                        </Navigate>
                        <SearchWrapper>
                            <TextInput
                                fz={'xs'}
                                fWeight={'medium'}
                                borderR='15px'
                                placeholder={"Поиск"}
                                theme='search'
                                size='s'
                            />
                        </SearchWrapper>
                        <IconWrapper>
                            <Link to='auth/login'>
                                <Backdrop>
                                    <Icon viewBox="0 0 28 28" fill="#404040" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 2.33334C12.8463 2.33334 11.7185 2.67546 10.7592 3.31644C9.79989 3.95741 9.05221 4.86845 8.6107 5.93436C8.16919 7.00026 8.05367 8.17315 8.27875 9.3047C8.50383 10.4363 9.0594 11.4757 9.87521 12.2915C10.691 13.1073 11.7304 13.6628 12.862 13.8879C13.9935 14.113 15.1664 13.9975 16.2323 13.556C17.2982 13.1145 18.2093 12.3668 18.8502 11.4075C19.4912 10.4482 19.8333 9.3204 19.8333 8.16668C19.8333 6.61958 19.2188 5.13585 18.1248 4.04189C17.0308 2.94793 15.5471 2.33334 14 2.33334ZM14 11.6667C13.3078 11.6667 12.6311 11.4614 12.0555 11.0768C11.4799 10.6922 11.0313 10.1456 10.7664 9.50607C10.5015 8.86653 10.4322 8.16279 10.5673 7.48386C10.7023 6.80493 11.0356 6.18129 11.5251 5.6918C12.0146 5.20232 12.6383 4.86898 13.3172 4.73393C13.9961 4.59888 14.6999 4.66819 15.3394 4.9331C15.9789 5.19801 16.5256 5.64661 16.9101 6.22218C17.2947 6.79775 17.5 7.47444 17.5 8.16668C17.5 9.09493 17.1313 9.98517 16.4749 10.6416C15.8185 11.2979 14.9283 11.6667 14 11.6667ZM24.5 24.5V23.3333C24.5 21.1674 23.6396 19.0902 22.108 17.5586C20.5765 16.0271 18.4993 15.1667 16.3333 15.1667H11.6667C9.50073 15.1667 7.42351 16.0271 5.89196 17.5586C4.36041 19.0902 3.5 21.1674 3.5 23.3333V24.5H5.83333V23.3333C5.83333 21.7862 6.44791 20.3025 7.54188 19.2086C8.63584 18.1146 10.1196 17.5 11.6667 17.5H16.3333C17.8804 17.5 19.3642 18.1146 20.4581 19.2086C21.5521 20.3025 22.1667 21.7862 22.1667 23.3333V24.5H24.5Z"/>
                                    </Icon>
                                </Backdrop>
                            </Link>

                            <Link to='favorite'>
                                <Backdrop>
                                    <Icon viewBox="0 0 27 27" fill="#404040" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.9425 5.0625C19.5568 5.06198 20.1651 5.18411 20.7316 5.42172C21.2981 5.65934 21.8114 6.00765 22.2416 6.44625C23.1279 7.34601 23.6247 8.55829 23.6247 9.82125C23.6247 11.0842 23.1279 12.2965 22.2416 13.1963L13.5003 22.0472L4.75908 13.1963C3.87279 12.2965 3.37599 11.0842 3.37599 9.82125C3.37599 8.55829 3.87279 7.34601 4.75908 6.44625C5.18947 6.00797 5.70288 5.65983 6.26932 5.42219C6.83576 5.18454 7.44387 5.06214 8.05814 5.06214C8.67241 5.06214 9.28053 5.18454 9.84697 5.42219C10.4134 5.65983 10.9268 6.00797 11.3572 6.44625L13.5003 8.64L15.635 6.46313C16.0638 6.0193 16.5778 5.66651 17.1461 5.42585C17.7144 5.1852 18.3254 5.06162 18.9425 5.0625ZM18.9425 3.375C18.1035 3.37429 17.2728 3.5411 16.4991 3.86564C15.7254 4.19019 15.0243 4.66594 14.4369 5.265L13.5003 6.21L12.5638 5.265C11.9756 4.66702 11.2743 4.1921 10.5008 3.86791C9.72723 3.54373 8.89688 3.37677 8.05814 3.37677C7.2194 3.37677 6.38905 3.54373 5.6155 3.86791C4.84194 4.1921 4.14065 4.66702 3.55252 5.265C2.35598 6.48306 1.68555 8.12224 1.68555 9.82969C1.68555 11.5371 2.35598 13.1763 3.55252 14.3944L13.5003 24.4688L23.4481 14.3944C24.6447 13.1763 25.3151 11.5371 25.3151 9.82969C25.3151 8.12224 24.6447 6.48306 23.4481 5.265C22.8602 4.6667 22.1589 4.19145 21.3854 3.86696C20.6118 3.54247 19.7814 3.37523 18.9425 3.375Z"/>
                                    </Icon>
                                </Backdrop>
                            </Link>

                            <Backdrop>
                                <Icon width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.14294 10.375C4.18484 9.8529 4.42185 9.36576 4.80677 9.01057C5.19169 8.65538 5.69627 8.45821 6.22002 8.45831H18.7804C19.3042 8.45821 19.8088 8.65538 20.1937 9.01057C20.5786 9.36576 20.8156 9.8529 20.8575 10.375L21.694 20.7916C21.717 21.0783 21.6804 21.3666 21.5865 21.6384C21.4926 21.9103 21.3435 22.1597 21.1485 22.3711C20.9534 22.5824 20.7168 22.7511 20.4534 22.8665C20.19 22.9819 19.9055 23.0416 19.6179 23.0416H5.38252C5.09494 23.0416 4.81049 22.9819 4.54709 22.8665C4.28368 22.7511 4.04701 22.5824 3.852 22.3711C3.65698 22.1597 3.50784 21.9103 3.41395 21.6384C3.32007 21.3666 3.28348 21.0783 3.30648 20.7916L4.14294 10.375V10.375Z" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.6673 11.4583V6.24998C16.6673 5.14491 16.2283 4.0851 15.4469 3.3037C14.6655 2.5223 13.6057 2.08331 12.5007 2.08331C11.3956 2.08331 10.3358 2.5223 9.55437 3.3037C8.77297 4.0851 8.33398 5.14491 8.33398 6.24998V11.4583" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </Icon>
                            </Backdrop>
                        </IconWrapper>
                    </RightSide>
                </>
                :
                <>
                    <NavBar hidden={hidden} setHidden={setHidden}/>
                    <Logo to="/">sneaker shop.</Logo>
                    <RightSide>
                        <TextInput
                            fz={'xs'}
                            fWeight={'medium'}
                            borderR='15px'
                            placeholder={"Поиск"}
                            theme='search'
                            size='s'
                        />
                        <Backdrop>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.14294 10.375C4.18484 9.8529 4.42185 9.36576 4.80677 9.01057C5.19169 8.65538 5.69627 8.45821 6.22002 8.45831H18.7804C19.3042 8.45821 19.8088 8.65538 20.1937 9.01057C20.5786 9.36576 20.8156 9.8529 20.8575 10.375L21.694 20.7916C21.717 21.0783 21.6804 21.3666 21.5865 21.6384C21.4926 21.9103 21.3435 22.1597 21.1485 22.3711C20.9534 22.5824 20.7168 22.7511 20.4534 22.8665C20.19 22.9819 19.9055 23.0416 19.6179 23.0416H5.38252C5.09494 23.0416 4.81049 22.9819 4.54709 22.8665C4.28368 22.7511 4.04701 22.5824 3.852 22.3711C3.65698 22.1597 3.50784 21.9103 3.41395 21.6384C3.32007 21.3666 3.28348 21.0783 3.30648 20.7916L4.14294 10.375V10.375Z" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.6673 11.4583V6.24998C16.6673 5.14491 16.2283 4.0851 15.4469 3.3037C14.6655 2.5223 13.6057 2.08331 12.5007 2.08331C11.3956 2.08331 10.3358 2.5223 9.55437 3.3037C8.77297 4.0851 8.33398 5.14491 8.33398 6.24998V11.4583" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Backdrop>

                        <Backdrop onClick={() => setHidden(!hidden)}>
                            <Menu>
                                <MenuItem></MenuItem>
                                <MenuItem></MenuItem>
                                <MenuItem></MenuItem>
                            </Menu>
                        </Backdrop>
                    </RightSide>
                </>


            }
        </HeaderWrapper>
    );
};

export default Header;