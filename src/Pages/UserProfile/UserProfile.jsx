import { useContext } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";


const UserProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <NavBar></NavBar>
            <div className="flex flex-col justify-center lg:max-w-xl border mx-auto p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                <img
                     src={user?.photoURL}
                    alt=""
                    className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">
                            {user?.displayName}
                        </h2>
                        <p>
                            {user?.email}
                        </p>
                    </div>
                    <div className="flex justify-center pt-2 space-x-4 align-center">
                        <a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
                            <FaGithub></FaGithub>
                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
                            <FaInstagram></FaInstagram>
                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
                            <FaTwitter></FaTwitter>
                        </a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UserProfile;