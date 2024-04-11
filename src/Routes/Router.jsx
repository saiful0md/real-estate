import {
    createBrowserRouter
} from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import EstateDatails from "../Pages/EstateDatails/EstateDatails";
import Home from "../Pages/Home/Home";
import Banner from "../Pages/Shared/Banner/Banner";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Root from "../layouts/Root";
const Router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/estates.json')
            },
            {
                path:'/',
                element:<Banner></Banner>,
            },
            {
                path:'/estates/:id',
                element:<EstateDatails></EstateDatails>,
                loader: ()=> fetch('/estates.json')
            },
            {
                path:'/updateProfile',
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path: '/userProfile',
                element:<UserProfile></UserProfile>
            }

        ]
    }
]) 


export default Router;