import { useLocation } from "react-router-dom";
import { Container } from "../../styles/layout/Container";
import sneakerImg from '../../assets/images/mainSneaker.png'
import * as S from '../../components/auth/style'
import Login from "../../components/auth/Login";
import Registration from "../../components/auth/Registration";
import { useWindowWidthAndHeight } from "../../hook/useWindowWidthAndHeight";



const Auth = () => {
    const location = useLocation();
    const [ width ] = useWindowWidthAndHeight()
    return (
        <Container>
            <S.AuthWrapper>
                {location.pathname === '/auth/login'
                    ?
                    <Login/>
                    :
                    <Registration/>
                }
                {width > 960 &&
                    <S.SidePicture>
                        <img src={sneakerImg} alt='sneaker'/>
                    </S.SidePicture>
                }
            </S.AuthWrapper>
        </Container>
    );
};

export default Auth;