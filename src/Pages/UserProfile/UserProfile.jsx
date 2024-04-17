
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";


const UserProfile = () => {
    const { user, UserProfile } = useContext(AuthContext)
    const [updateName, setUpdateName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [error, setError] = useState('');

    const handleSave = async (e) => {
        e.preventDefault();
        if (!updateName.trim() || !photoURL.trim()) {
            setError('Name and Photo URL are required');
            return;
        }
        try {
            await UserProfile(updateName, photoURL);
            toast("Profile updated successfully");
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("Failed to update profile. Please try again later.");
        }
    };



    return (
        <div>
            <Helmet>
                <title>RealBizz | User Profile</title>
            </Helmet>
            <NavBar></NavBar>
            <div className="flex flex-col justify-center my-10 lg:max-w-xl border mx-auto p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                <img
                    src={user?.photoURL || 'https://i.ibb.co/YcsgQSK/social-avatar-stories-gradient-frame-41737-3.jpg'}
                    alt=""
                    className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">
                            {user?.displayName}
                        </h2>
                        <p>
                            <span className="font-semibold">Email:</span> {user?.email || 'Not Found !'}
                        </p>
                    </div>
                    <div className="flex justify-center pt-2 space-x-4 align-center">
                        <a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-800 hover:text-yellow-600">
                            <FaGithub></FaGithub>
                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-800 hover:text-yellow-600">
                            <FaInstagram></FaInstagram>
                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-800 hover:text-yellow-600">
                            <FaTwitter></FaTwitter>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-xl mx-auto my-10">
                <h2 className="text-2xl font-bold my-6">Update Your Profile</h2>
            <form className="card-body border rounded-lg " onSubmit={handleSave}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        className="input input-bordered"
                        name="name"
                        value={updateName}
                        onChange={(e) => setUpdateName(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        className="input input-bordered"
                        name="photo"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                    />
                </div>
                <div className="form-control my-5">
                    <button type="submit" className="btn btn-primary">Save Change</button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
            </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UserProfile;