import styled from "styled-components";
import space from "@styled-system/space";

import Text from "../../ui/text/Text";
import Button from "../../ui/button/Button";

import MainSneakerImg from '../../assets/images/mainSneaker.png'
import { spacer } from "../../utils/spacer";

const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  ${ spacer }
  @media ${({ theme }) => theme.media.extraLarge} {
    justify-content: center;
    flex-wrap: wrap-reverse;
    gap: 50px;
  }
`

const TextMargin = styled.div`
  ${ spacer }
`

const ContentWrapper = styled.div`
    max-width: 639px;
`

const ImgWrapper = styled.picture`
  min-width: 350px;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
`

const BtnWrapper = styled.div`
    max-width: 190px;
`


const Banner = () => {
    return (
        <SectionWrapper mt='150px' mb='200px'>
            <ContentWrapper>
                <Text as='h1' typography='xxxxl' weight="bold">Это adidas, это Yeezy</Text>
                <TextMargin  mt='12px' mb='34px'>
                    <Text as='p' typography='xl' weight="regular" TextColor='gray800'>
                        Adidas Yeezy Boost 700 — третий по счету силуэт, вышедший под эгидой сотрудничества adidas и Канье Уэста.
                    </Text>
                </TextMargin>
                <BtnWrapper>
                    <Button variant='fill' size='m' BtnWidth='max' fz='18px'>Купить</Button>
                </BtnWrapper>
            </ContentWrapper>

            <ImgWrapper>
                <img src={MainSneakerImg} alt='sneaker'/>
            </ImgWrapper>
        </SectionWrapper>
    );
};

export default Banner;