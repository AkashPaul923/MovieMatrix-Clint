import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Layout/Home";
import AllMovies from "../Layout/AllMovies";
import AddMovies from "../Layout/AddMovies";
import MyFavorites from "../Layout/MyFavorites";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/allmovies',
                element: <AllMovies></AllMovies>,
            },
            {
                path: '/addmovies',
                element: <AddMovies></AddMovies>,
            },
            {
                path: '/myfavorites',
                element: <MyFavorites></MyFavorites>,
            },
        ],
    }
])
export default router;