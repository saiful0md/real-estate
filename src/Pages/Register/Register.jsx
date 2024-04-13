import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [userInfo, setUserIfo] = useState([])
    const location = useLocation()
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        const photo = form.get("photo")
        const name = form.get("name")
        // create user 
        createUser(email, password, photo, name)
            .then(result => {
                updateUserProfile(name, photo)
                .then(()=>{

                    navigate(location?.state ||  '/')
                })
                console.log(result.user);
                setUserIfo(result.user);
            })
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="max-w-md mx-auto my-10">
                <h1 className="text-5xl font-bold text-center">Register Now</h1>
                <form onSubmit={handleRegister} className="card-body border rounded-lg">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                {userInfo}
                <p className=" text-base font-medium text-slate-500 text-center my-4">Dont’t Have An Account ? <Link to={'/login'} className="text-red-600 underline">Login</Link></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;