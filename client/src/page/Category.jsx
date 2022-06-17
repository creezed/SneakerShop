import styled from "styled-components";
import ProductCard from "../components/productCard/ProductCard";
import { Select } from "../ui/select/Select";
import Button from "../ui/button/Button";
import ProductFilter from "../components/productFilter/ProductFilter";
import { Container } from "../styles/layout/Container";
import { spacer } from "../utils/spacer";


const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 30px;
  ${ spacer };
`

const ProductsListAndFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const ProductsList = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`

const SelectWrapper = styled.div`
  max-width: 250px;
`

const BtnWrapper = styled.div`
  max-width: 480px;
`

const Category = () => {

    return (
        <Container>
                <Grid mt='2.5rem'>
                    <ProductFilter/>
                    <ProductsListAndFilter>
                        <SelectWrapper>
                            <Select options={[
                                { content: "Популярные", value: "popular" },
                                { content: "Сначала дешёвые", value: "low" },
                                { content: "Сначала дорогие", value: "height" },
                            ]}/>
                        </SelectWrapper>
                        <ProductsList>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </ProductsList>
                        <BtnWrapper>
                            <Button size='m' variant="fill" BtnWidth='max'>Загрузить ещё</Button>
                        </BtnWrapper>
                    </ProductsListAndFilter>
                </Grid>
        </Container>
    );
};

export default Category;