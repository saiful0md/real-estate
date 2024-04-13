import {
    createBrowserRouter
} from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import ApartmentsDetails from "../Pages/ApartmentsDetails/ApartmentsDetails";
import FamillyHomeDetails from "../Pages/FamillyHomeDetails/FamillyHomeDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SeniorLivingCommunitiesDetails from "../Pages/SeniorLivingCommunitiesDetails/SeniorLivingCommunitiesDetails";
import StudentHousingDetails from "../Pages/StudentHousingDetails/StudentHousingDetails";
import TownhousesDetails from "../Pages/TownhousesDetails/TownhousesDetails";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import UserProfile from "../Pages/UserProfile/UserProfile";
import VacationRentalsDetails from "../Pages/VacationRentalsDetails/VacationRentalsDetails";
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
                path:'apartments/:id',
                element:<PrivateRoute><ApartmentsDetails></ApartmentsDetails></PrivateRoute>,
                loader: ()=> fetch('/data.json')
            },
            {
                path:'student/:id',
                element:<PrivateRoute><StudentHousingDetails></StudentHousingDetails></PrivateRoute>,
                loader: ()=> fetch('/data.json')
            },
            {
                path:'seniorliving/:id',
                element:<PrivateRoute><SeniorLivingCommunitiesDetails></SeniorLivingCommunitiesDetails></PrivateRoute>,
                loader: ()=> fetch('/data.json')
            },
            {
                path:'vacation/:id',
                element:<PrivateRoute><VacationRentalsDetails></VacationRentalsDetails></PrivateRoute>,
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
                element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            }

        ]
    }
]) 


export default Router;