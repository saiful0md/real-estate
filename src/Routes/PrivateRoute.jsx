import PropTypes from 'prop-types';
import { useContext } from "react";
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};
PrivateRoute.propTypes ={
    children: PropTypes.node
}
export default PrivateRoute;