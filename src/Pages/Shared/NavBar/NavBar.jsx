import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSingOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <li className="mr-3"><NavLink style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "white" : "",
                background: isActive ? '#CA8A04' : '',
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }} to={'/'}>Home</NavLink></li>
        <li className="mr-3"><NavLink style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "white" : "",
                background: isActive ? '#CA8A04' : '',
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }} to={'/updateProfile'}>Update Profile</NavLink></li>
        <li className="mr-3"><NavLink style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "white" : "",
                background: isActive ? '#CA8A04' : '',
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }} to={'/userProfile'}>User profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to={'/'} className="py-2 px-5 rounded-lg hover:bg-yellow-500  bg-yellow-600 text-white font-bold duration-700 text-xl ">RealBizz</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleSingOut} className="btn">Sign Out</button>
                        :
                        <Link to={'/login'}>
                            <button className="btn">Login</button>
                        </Link>
                }
                <Link to={'/register'} className="btn">Register</Link>
            </div>
        </div>
    );
};

export default NavBar;