import { Routes, Route } from 'react-router-dom'

import { publicRoutes } from "./routerList";
import Layout from "./Layout";

const AppRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Layout />}>
                {publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element} />
                )}
            </Route>

        </Routes>
    )
}

export default AppRouter