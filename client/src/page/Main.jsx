import SliderList from "../components/productSlider/SliderList";
import Banner from "../components/banner/Banner";

import { Container } from "../styles/layout/Container";
import Basket from "../components/basket/Basket";



const Main = () => {
    return (
        <>
            <Container>
                {/*<Basket/>*/}
                <Banner/>
                <SliderList title='Популярно сейчас' link={true} items={Array.from({length:7})}/>
                <SliderList title='Популярно сейчас' link={true} items={Array.from({length:7})}/>
                <SliderList title='Представленные бренды' link={true} items={Array.from({length:7})}/>
            </Container>
        </>
    );
};

export default Main;