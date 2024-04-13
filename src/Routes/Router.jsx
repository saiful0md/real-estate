import {
    createBrowserRouter
} from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import FamillyHomeDetails from "../Pages/FamillyHomeDetails/FamillyHomeDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TownhousesDetails from "../Pages/TownhousesDetails/TownhousesDetails";
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
                loader:()=> fetch('/data.json')
            },
            {
                path:'famillyHomeDetails/:id',
                element:<PrivateRoute><FamillyHomeDetails></FamillyHomeDetails></PrivateRoute>,
                loader: ()=> fetch('/data.json')
            },
            {
                path:'townhouses/:id',
                element:<PrivateRoute><TownhousesDetails></TownhousesDetails></PrivateRoute>,
                loader: ()=> fetch('/data.json')
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