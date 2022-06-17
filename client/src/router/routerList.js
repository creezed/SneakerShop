import Main from "../page/Main";
import Category from "../page/Category";
import Auth from "../page/Auth/Auth";
import Favorite from "../page/Favorite";


export const publicRoutes = [
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/category',
        element: <Category/>
    },
    {
        path: 'auth/login',
        element: <Auth/>
    },
    {
        path: 'auth/registration',
        element: <Auth/>
    },
    {
        path: '/favorite',
        element: <Favorite/>
    }
]
