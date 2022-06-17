import styled from "styled-components";
import {Container} from "../../styles/layout/Container";

const Grid = styled.div`
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(4,215px);
  gap: 20px;
`

const GridItem = styled.div`
  grid-row: ${({ row }) => row} span;
  grid-column: ${({ col }) => col} span;
`

const Collage = () => {
    return (
        <Container>
            <Grid>
                <GridItem>

                </GridItem>
            </Grid>
        </Container>
    );
};

export default Collage;