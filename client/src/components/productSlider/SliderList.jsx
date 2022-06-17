import { Link } from "react-router-dom";

import styled from "styled-components";
import space from "@styled-system/space";

import { SwiperSlide } from "swiper/react";

import { colors, fontWeight, fontSize, font, transition } from "../../styles/themeAction";

import Slider from "./Slider";
import Text from "../../ui/text/Text";
import ProductCard from "../productCard/ProductCard";


const OffsetSection = styled.section(space)

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
`

const LinkProducts = styled(Link)`
  font-family: ${ font.lato };
  font-weight: ${ fontWeight.bold };
  font-size: ${ fontSize.m };
  color: ${ colors.accentColor };
`

const Arrow = styled.svg`
  transition: .1s ${transition.easeOut};
`

const LinkProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  :hover > ${Arrow} {
    transform: translateX(10px);
  }
`

const SliderList = ({ title, link, items }) => {
    return (
        <OffsetSection mb={90}>
            <TextWrapper>
                <Text as='h2' typography='xxl' weight="bold" leftIcon>{title}</Text>
                {link &&
                    <LinkProductsWrapper>
                        <LinkProducts to='/'>Смотреть всё</LinkProducts>
                        <Arrow width='16px' height='16px' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_19_23)">
                                <path d="M15.7603 7.45618L7.5475 0.0876403C7.48446 0.0314605 7.40402 0 7.31924 0H5.3954C5.23454 0 5.16063 0.206742 5.28236 0.314607L12.8951 7.14607H0.173846C0.0781971 7.14607 -6.10352e-05 7.22697 -6.10352e-05 7.32584V8.67416C-6.10352e-05 8.77303 0.0781971 8.85393 0.173846 8.85393H12.893L5.28019 15.6854C5.15845 15.7955 5.23236 16 5.39323 16H7.38229C7.42359 16 7.46489 15.9843 7.49533 15.9551L15.7603 8.54382C15.8355 8.47617 15.8958 8.39262 15.9372 8.2988C15.9785 8.20499 15.9999 8.10309 15.9999 8C15.9999 7.89691 15.9785 7.79501 15.9372 7.7012C15.8958 7.60738 15.8355 7.52383 15.7603 7.45618Z" fill="#D6434F"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_19_23">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </Arrow>
                    </LinkProductsWrapper>
                }
            </TextWrapper>

            <Slider>
                {items.map((slide, index) =>
                    <SwiperSlide style={{margin: '20px 0'}} key={index}>
                        <ProductCard/>
                    </SwiperSlide>
                )}
            </Slider>
        </OffsetSection>
    );
};

export default SliderList;