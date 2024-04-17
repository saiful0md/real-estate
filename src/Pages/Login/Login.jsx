import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";

const Login = () => {
    const { signIn, googleSignIn ,gitHubSignIn } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const location = useLocation();
    const navigate = useNavigate()
    const handleLogIn = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get("password");
       
        
        

        setLoginError('')
        signIn(email, password)
            .then(() => {
                toast("Login Successfully");
                setTimeout(() => {
                    navigate(location?.state ||  "/")
                }, 1500);
            })
            .catch(error => {
                setLoginError(  error.message);
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(() => {
            toast("Google Login Successfully");
            setTimeout(() => {
                navigate(location?.state ||  "/")
            }, 1500);
        })
            .catch(error => {
                setLoginError(error.message);
            })
    }
    const handleGitHubSignIn = () => {
        gitHubSignIn()
            .then(() => {
                toast("Github Login Successfully");
                setTimeout(() => {
                    navigate(location?.state ||  "/")
                }, 1500);
            })
            .catch(error => {
                setLoginError(error.message);
            })
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="max-w-md mx-auto">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <form onSubmit={handleLogIn} className="card-body border rounded-lg">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                    {
                        loginError && <p className="text-red-400">{loginError}</p>
                    }
                </form>
                <ToastContainer></ToastContainer>

                <div className="my-6 space-y-4">
                    <button  onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <FaGoogle></FaGoogle>
                        <p>Login with Google</p>
                    </button>
                    <button onClick={handleGitHubSignIn} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <FaGithub></FaGithub>
                        <p>Login with GitHub</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr className="w-full dark:text-gray-600" />
                </div>
                <p className=" text-base font-medium text-slate-500 text-center my-4">Dont’t Have An Account ? <Link to={'/register'} className="text-red-600 underline">Register</Link></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;