import {Outlet, useLocation} from 'react-router-dom'

import Header from "../components/header/Header";
import {Container} from "../styles/layout/Container";

const Layout = () => {
    const location = useLocation()
    const pathWithoutHeader = ['/auth/login', '/auth/registration']

    return(
        <>
            {!pathWithoutHeader.includes(location.pathname) &&
                <Container>
                    <Header />
                </Container>
            }
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout