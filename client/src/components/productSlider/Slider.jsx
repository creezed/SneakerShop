import { useRef } from "react";
import styled, {css} from "styled-components";

import { Swiper } from 'swiper/react';
import 'swiper/css';

import useNavigationSwiper from "../../hook/useNavigationSwiper";

import {colors, transition, zIndex} from "../../styles/themeAction";



const Arrow = styled.svg`
  transition: .1s ${transition.easeOut};
`

const BtnChangeSlideWrapper = styled.div`
  z-index: ${ zIndex.ui };
  position: absolute;
  ${({ prev }) => prev ? css`left: -25px` : css`right: -25px`};
  top: 50%;
  transform: translateY(-50%);
`

const BtnChangeSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: ${ colors.white };
  box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transform: scale(1);
  transition: transform .1s ${ transition.easeOut };
  
  & > ${Arrow} {
    fill: ${ colors.gray800 };
    ${({ prev }) => prev && css`transform: scale(1) rotate(180deg);`}
  }
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(.95);
  }
`

const SliderWrapper = styled.div`
  position: relative;
`

const Slider = ({ children }) => {
    const sliderRef = useRef(null)
    const [ handlePrev, handleNext ] = useNavigationSwiper(sliderRef)

    return (
        <SliderWrapper>
            <Swiper
                ref={sliderRef}
                slidesPerView={1.05}
                grabCursor={true}
                breakpoints={{
                    500: {
                        slidesPerView: 2
                    },
                    760: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    860: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
            >
                { children }
            </Swiper>
            <BtnChangeSlideWrapper prev>
                <BtnChangeSlide prev onClick={handlePrev}>
                    <Arrow width="24" height="23" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_19_23)">
                            <path d="M15.7603 7.45618L7.5475 0.0876403C7.48446 0.0314605 7.40402 0 7.31924 0H5.3954C5.23454 0 5.16063 0.206742 5.28236 0.314607L12.8951 7.14607H0.173846C0.0781971 7.14607 -6.10352e-05 7.22697 -6.10352e-05 7.32584V8.67416C-6.10352e-05 8.77303 0.0781971 8.85393 0.173846 8.85393H12.893L5.28019 15.6854C5.15845 15.7955 5.23236 16 5.39323 16H7.38229C7.42359 16 7.46489 15.9843 7.49533 15.9551L15.7603 8.54382C15.8355 8.47617 15.8958 8.39262 15.9372 8.2988C15.9785 8.20499 15.9999 8.10309 15.9999 8C15.9999 7.89691 15.9785 7.79501 15.9372 7.7012C15.8958 7.60738 15.8355 7.52383 15.7603 7.45618Z"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_19_23">
                                <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </Arrow>
                </BtnChangeSlide>
            </BtnChangeSlideWrapper>
            <BtnChangeSlideWrapper next>
                <BtnChangeSlide next onClick={handleNext}>
                    <Arrow width="24" height="23" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_19_23)">
                            <path d="M15.7603 7.45618L7.5475 0.0876403C7.48446 0.0314605 7.40402 0 7.31924 0H5.3954C5.23454 0 5.16063 0.206742 5.28236 0.314607L12.8951 7.14607H0.173846C0.0781971 7.14607 -6.10352e-05 7.22697 -6.10352e-05 7.32584V8.67416C-6.10352e-05 8.77303 0.0781971 8.85393 0.173846 8.85393H12.893L5.28019 15.6854C5.15845 15.7955 5.23236 16 5.39323 16H7.38229C7.42359 16 7.46489 15.9843 7.49533 15.9551L15.7603 8.54382C15.8355 8.47617 15.8958 8.39262 15.9372 8.2988C15.9785 8.20499 15.9999 8.10309 15.9999 8C15.9999 7.89691 15.9785 7.79501 15.9372 7.7012C15.8958 7.60738 15.8355 7.52383 15.7603 7.45618Z"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_19_23">
                                <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </Arrow>
                </BtnChangeSlide>
            </BtnChangeSlideWrapper>
        </SliderWrapper>
    );
};

export default Slider;