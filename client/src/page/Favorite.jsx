import { Container } from "../styles/layout/Container";
import styled from "styled-components";
import ProductCard from "../components/productCard/ProductCard";
import Text from "../ui/text/Text";
import { spacer } from "../utils/spacer";



const ProductList = styled.div`
  margin-top: 3.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  gap: 30px;
`

const Spacer = styled.div`
  ${ spacer }
`

const Favorite = () => {
    return (
        <Container>
            <Spacer mt="2.5rem">
                <Text as='h2' typography='xxl' weight="bold" leftIcon>Избранное</Text>
                <ProductList>
                    <ProductCard variant="inFavoriteOrBasket"/>
                    <ProductCard variant="inFavoriteOrBasket"/>
                    <ProductCard variant="inFavoriteOrBasket"/>
                    <ProductCard variant="inFavoriteOrBasket"/>
                    <ProductCard variant="inFavoriteOrBasket"/>
                    <ProductCard variant="inFavoriteOrBasket"/>
                    <ProductCard variant="inFavoriteOrBasket"/>
                    <ProductCard variant="inFavoriteOrBasket"/>
                </ProductList>
            </Spacer>
        </Container>
    );
};

export default Favorite;