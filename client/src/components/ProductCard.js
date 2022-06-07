import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { colors, fontSize, fontWeight, transition, boxShadow } from "../styles/themeAction";


// If the product is in the favorites or in the user's cart, then you need a cross to delete it
const CloseWrapper = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: .1s ease-out;
  top: 30px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transform: translateY(10px);
  :active {
    transform: scale(.9);
    background-color: ${colors.gray100};
  }
`

const Close = styled.svg`
  width: 15px;
  height: 15px;
`
//


// Parent for the add to favorites and to cart button
const BtnIconWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  border: 1px solid ${colors.gray100};
  border-radius: 7px;
  transition: .1s ${transition.easeOut};
`
//

// Icons
const FavoriteBtn = styled(BtnIconWrapper)`
  top: 30px;
  left: 30px;
  
  ${({ inFavorite }) => inFavorite &&
    css`
      background-color: ${colors.accentColorLight};
      border: 1px solid ${colors.accentColorLight};
    `
  }
`

const BasketBtn = styled(BtnIconWrapper)`
  bottom: 30px;
  right: 30px;
  
  ${({ inBasket }) => inBasket &&
    css`
      background-color: ${colors.accentColor};
      border: 1px solid ${colors.accentColor};
    `
}
`

const FavoriteIcon = styled.svg`
  width: 18px;
  height: 15px;
  & path {
    transition: .1s ${transition.easeOut};
    fill: ${({ inFavorite }) => inFavorite ? colors.accentColor : 'transparent'};
    stroke: ${({ inFavorite }) => inFavorite ? colors.accentColor : colors.gray300};
    stroke-width: 1px;
  }
`

const BasketIcon = styled.svg`
  width: 12px;
  height: 11px;
`

const BasketIconCheck = styled.path`
  visibility: hidden;
  fill: ${colors.gray300};
  transform: translateY(-20px);
  transition: .1s ${transition.easeOut};
  ${({ inBasket }) => inBasket &&
      css`
        visibility: visible;
        fill: ${colors.white};
        transform: translateY(0px);
      `
  }
`

const BasketIconPlus = styled.path`
  visibility: visible;
  fill: ${colors.gray300};
  transform: translateY(0px);
  transition: .1s ${transition.easeOut};
  ${({ inBasket }) => inBasket && 
      css`
        visibility: hidden;
        transform: translateY(20px);
      `
  }
`
//

const Card = styled(Link)`
  width: 280px;
  display: block;
  position: relative;
  overflow: hidden;
  padding: 44px 30px 30px;
  border-radius: 50px;
  cursor: pointer;
  transition: .15s ease-out;
  
  border: 1px solid ${colors.border};
  background-color: ${colors.white};
  :hover {
    transform: translateY(-5px);
    box-shadow: ${boxShadow.largerShadow};
    & ${CloseWrapper} {
      visibility: visible;
      transform: translateY(0px);
      opacity: 1;
    }
  }
`

const CardPicture = styled.picture`
  display: block;
  height: 130px;
  width: 220px;
  margin-bottom: 26px;
  & > img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    object-fit: cover;
  }
`

const CardTitle = styled.span`
  display: block;
  overflow: hidden;
  margin-bottom: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  
  font-weight: ${fontWeight.medium};
  font-size: ${fontSize.xs};
`

const PriceLabel = styled.span`
  text-transform: uppercase;
  margin-bottom: 2px;
  
  font-weight: ${fontWeight.medium};
  font-size: ${fontSize.xxs};
  color: ${colors.gray800};
`

const Price = styled.span`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.xs};
  color: ${colors.gray900};
`


const ProductCard = ({ variant, inFavorite, inBasket, setFavorite, setBasket }) => {
    const handleFavorite = (e) => {
        e.preventDefault()
        setFavorite()
    }

    const handleBasket = (e) => {
        e.preventDefault()
        setBasket()
    }

    return (
        <Card to='/25'>
            <CardPicture>
                <img
                    src="https://superstep.ru/upload/resize_cache/photo/1476/TMEM0EM00872BDS/800_800_1/TMEM0EM00872BDS.01.jpg"
                    alt="sneaker"
                />
            </CardPicture>
            <CardTitle>Мужские кроссовки<br/>Adidas: Yeezy 700 v2</CardTitle>
            <PriceLabel>цена:</PriceLabel>
            <br/>
            <Price>{'12999'.length > 4 ? '12999'.replace(/(\d{2})(\d*)/, '$1 $2') : '12999'} Руб.</Price>

            {variant === "inFavoriteOrBasket" &&
                <CloseWrapper>
                    <Close viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.771341 15C0.57375 15 0.376158 14.9248 0.226034 14.7736C-0.0753447 14.4722 -0.0753447 13.9836 0.226034 13.6823L13.6826 0.226028C13.984 -0.0753428 14.4726 -0.0753428 14.774 0.226028C15.0753 0.5274 15.0753 1.016 14.774 1.31756L1.31759 14.7736C1.16634 14.9239 0.968745 15 0.771341 15Z" fill="#404040"/>
                        <path d="M14.2288 15C14.0313 15 13.8339 14.9248 13.6835 14.7736L0.226034 1.31756C-0.0753447 1.016 -0.0753447 0.5274 0.226034 0.226028C0.527413 -0.0753428 1.01602 -0.0753428 1.31759 0.226028L14.774 13.6823C15.0753 13.9836 15.0753 14.4722 14.774 14.7736C14.6227 14.9239 14.4253 15 14.2288 15Z" fill="#404040"/>
                    </Close>
                </CloseWrapper>
            }

            <FavoriteBtn onClick={handleFavorite} inFavorite={inFavorite}>
                <FavoriteIcon inFavorite={inFavorite} viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1139 3.13294C16.8556 2.53943 16.4831 2.00159 16.0173 1.54953C15.5511 1.09613 15.0015 0.73582 14.3983 0.488192C13.7729 0.230397 13.102 0.0984423 12.4248 0.099989C11.4746 0.099989 10.5476 0.358153 9.74196 0.845797C9.54923 0.962449 9.36614 1.09058 9.19268 1.23018C9.01923 1.09058 8.83613 0.962449 8.6434 0.845797C7.83779 0.358153 6.91075 0.099989 5.96059 0.099989C5.2764 0.099989 4.61341 0.230027 3.98703 0.488192C3.38186 0.736794 2.83643 1.0944 2.3681 1.54953C1.90169 2.00108 1.5291 2.53904 1.27146 3.13294C1.00357 3.75062 0.86673 4.40655 0.86673 5.0816C0.86673 5.71841 0.997786 6.38199 1.25797 7.05704C1.47576 7.62117 1.78798 8.20635 2.18693 8.79726C2.81909 9.73238 3.6883 10.7077 4.76759 11.6963C6.55613 13.3352 8.32732 14.4673 8.40249 14.5132L8.85926 14.8039C9.06163 14.932 9.32181 14.932 9.52418 14.8039L9.98095 14.5132C10.0561 14.4654 11.8254 13.3352 13.6158 11.6963C14.6951 10.7077 15.5644 9.73238 16.1965 8.79726C16.5955 8.20635 16.9096 7.62117 17.1255 7.05704C17.3857 6.38199 17.5167 5.71841 17.5167 5.0816C17.5186 4.40655 17.3818 3.75062 17.1139 3.13294Z"/>
                </FavoriteIcon>
            </FavoriteBtn>

            <BasketBtn onClick={handleBasket} inBasket={inBasket}>
                    <BasketIcon  viewBox={inBasket ? "0 0 12 11" : "0 0 14 14"} xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_375_238)">
                            <BasketIconCheck inBasket={inBasket} d="M9.35123 0.31515C9.53388 0.130791 9.78209 0.0262302 10.0416 0.0243187C10.3011 0.0224071 10.5508 0.1233 10.7362 0.304948C10.9215 0.486596 11.0274 0.734228 11.0308 0.993726C11.0341 1.25322 10.9345 1.50348 10.7539 1.68982L5.52723 8.22381C5.43744 8.32049 5.32909 8.39808 5.20865 8.45195C5.08821 8.50582 4.95815 8.53487 4.82623 8.53736C4.69431 8.53985 4.56325 8.51573 4.44086 8.46644C4.31847 8.41715 4.20727 8.3437 4.1139 8.25048L0.648566 4.78648C0.464417 4.60225 0.360999 4.3524 0.361061 4.09191C0.361124 3.83143 0.464662 3.58163 0.648899 3.39748C0.833136 3.21333 1.08298 3.10992 1.34347 3.10998C1.60396 3.11004 1.85375 3.21358 2.0379 3.39782L4.77856 6.13915L9.32523 0.345816C9.33349 0.335275 9.3424 0.325256 9.3519 0.315816L9.35123 0.31515Z"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_375_238" x="0.361061" y="0.024292" width="10.6698" height="10.5132" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="2"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_375_238"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_375_238" result="shape"/>
                            </filter>
                        </defs>
                        <BasketIconPlus inBasket={inBasket} d="M11.8943 5.49549H7.89V1.49139C7.89 -0.0526298 5.49541 -0.0526298 5.49541 1.49139V5.49549H1.49116C-0.0525134 5.49549 -0.0525134 7.89001 1.49116 7.89001H5.49541V11.8941C5.49541 13.4381 7.89 13.4381 7.89 11.8941V7.89001H11.8943C13.4381 7.89001 13.4381 5.49549 11.8943 5.49549Z"/>
                    </BasketIcon>
            </BasketBtn>
        </Card>
    );
};

export default ProductCard;