import { Routes, Route } from 'react-router-dom'

import Layout from "./Layout";

const AppRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<h1>Hello</h1>} />
            </Route>
        </Routes>
    )
}

export default AppRouter