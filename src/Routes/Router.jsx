import {
    createBrowserRouter
} from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import EstateDatails from "../Pages/EstateDatails/EstateDatails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Root from "../layouts/Root";
import PrivateRoute from "./PrivateRoute";
const Router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/singleFamillyHouse.json')
            },
            {
                path:'/estates/:id',
                element:<PrivateRoute><EstateDatails></EstateDatails></PrivateRoute>,
                loader: ()=> fetch('/estates.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
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