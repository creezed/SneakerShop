import { createPortal } from "react-dom";
import styled from "styled-components";
import Text from "../../ui/text/Text";
import Button from "../../ui/button/Button";

import arrowImg from '../../assets/icon/arrow.svg'
import ProductCard from "../productCard/ProductCard";

const BasketOverlay = styled.div`
  z-index: ${({ theme }) => theme.zIndex.basket};
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0, .4);
  transition: background-color .1s ease-out;
`

const BasketWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  right: 0;
  bottom: 0;
  max-width: 444px;
  min-width: 300px;
  height: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: -10px 4px 12px rgba(0, 0, 0, 0.1);
`

const BasketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BasketBody = styled.div`
  flex-grow: 1;
  gap: 20px;
  padding: 30px 0;
  overflow-y: scroll;
  overflow-x: hidden;
`

const BasketFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Close = styled.svg`
  cursor: pointer;
  width: 20px;
  height: 20px;
`

const Basket = () => {
    return createPortal(
        <BasketOverlay>
            <BasketWrapper>
                <BasketHeader>
                    <Text as='h3' typography="xl" weight="bold">Корзина</Text>
                    <Close viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.771341 15C0.57375 15 0.376158 14.9248 0.226034 14.7736C-0.0753447 14.4722 -0.0753447 13.9836 0.226034 13.6823L13.6826 0.226028C13.984 -0.0753428 14.4726 -0.0753428 14.774 0.226028C15.0753 0.5274 15.0753 1.016 14.774 1.31756L1.31759 14.7736C1.16634 14.9239 0.968745 15 0.771341 15Z" fill="#404040"/>
                        <path d="M14.2288 15C14.0313 15 13.8339 14.9248 13.6835 14.7736L0.226034 1.31756C-0.0753447 1.016 -0.0753447 0.5274 0.226034 0.226028C0.527413 -0.0753428 1.01602 -0.0753428 1.31759 0.226028L14.774 13.6823C15.0753 13.9836 15.0753 14.4722 14.774 14.7736C14.6227 14.9239 14.4253 15 14.2288 15Z" fill="#404040"/>
                    </Close>
                </BasketHeader>
                <BasketBody>
                    <ProductCard/>
                </BasketBody>
                <BasketFooter>
                    <Button variant="fill" size='m' borderR="18px" fz='16px' rightIcon={arrowImg}>Оформить заказ</Button>
                </BasketFooter>
            </BasketWrapper>
        </BasketOverlay>,
        document.getElementById('root')
    );
};

export default Basket;