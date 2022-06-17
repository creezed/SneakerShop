import styled from "styled-components";

import { colors, zIndex } from "../../styles/themeAction";
import { skeleton } from '../../ui/animations/skeleton'

const Card = styled.div`
  position: relative;
  width: 280px;
  display: block;
  overflow: hidden;
  padding: 80px 30px 30px;
  border-radius: 50px;
  :before {
    content: "";
    z-index: ${zIndex.ui};
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: -webkit-gradient(
            linear, left top, right top, 
            from(transparent),
            color-stop(rgba(255, 255, 255, .6)),
            to(transparent));

    background: linear-gradient(
                90deg, transparent, rgba(255, 255, 255, .6), transparent
    );
    animation: ${skeleton} 0.8s infinite;
  }
  
  border: 1px solid ${colors.border};
  background-color: ${colors.white};
`

const CardPicture = styled.picture`
  display: block;
  height: 100px;
  width: 220px;
  margin-bottom: 26px;
  background-color: ${colors.border};
  border-radius: 10px;
`

const CardTitle = styled.span`
  display: block;
  width: 100%;
  height: 18px;
  background-color: ${colors.border};
  border-radius: 3px;
  margin-bottom: 4px;
`

const CardTitleSecond = styled.span`
  display: block;
  width: 60%;
  height: 15px;
  background-color: ${colors.border};
  border-radius: 3px;
  margin-bottom: 30px;
`

const Price = styled.span`
  display: block;
  width: 100px;
  height: 20px;
  background-color: ${colors.border};
  border-radius: 8px;
`

const BtnIconWrapper = styled.div`
  position: absolute;
  width: 37px;
  height: 37px;
  border: 1px solid ${colors.gray100};
  border-radius: 7px;
  background-color: ${colors.border};
`

const BtnFavorite = styled(BtnIconWrapper)`
  top: 30px;
  left: 30px;
`
const BtnBasket = styled(BtnIconWrapper)`
  bottom: 30px;
  right: 30px;
`

const ProductCardSkeleton = () => {
    return (
        <Card>
            <CardPicture />
            <CardTitle />
            <CardTitleSecond />
            <Price />
            <BtnFavorite/>
            <BtnBasket/>
        </Card>
    );
};

export default ProductCardSkeleton;