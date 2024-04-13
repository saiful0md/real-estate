import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";


const FamillyHomeDetails = () => {
    const data = useLoaderData()
    const single_family_homes = data.single_family_homes;
    const { id } = useParams();
    const idInt = parseInt(id);
    const famillyHomeDetails = single_family_homes.find(estate => estate.id === idInt)
   
    return (
        <div>
            <Helmet>
                <title>RealBizz | Familly House Details</title>
            </Helmet>
            <NavBar></NavBar>
            <div className="p-6 border rounded-md shadow-lg card bg-base-100 dark:bg-gray-50 dark:text-gray-900">
                <div className='relative'>
                    <img src={famillyHomeDetails.image} alt="" className="object-cover dark:opacity-90 object-center w-full rounded-md  dark:bg-gray-500" />
                    <div className='absolute bottom-3 left-4'>
                        <p className='py-2 px-3 w-16 text-center text-white rounded-lg hover:bg-yellow-500 bg-yellow-600 duration-300 mb-2'>{famillyHomeDetails.status}</p>
                        <p className='text-2xl text-white drop-shadow-2xl bg-gray-900 bg-opacity-40 p-2 rounded-lg font-bold'>{famillyHomeDetails.price}</p>
                    </div>
                </div>
                <p className="text-yellow-600 font-bold mt-6">{famillyHomeDetails.segment_name}</p>
                <div className="mt-4 mb-2">
                    <h2 className="text-xl font-bold tracking-wide hover:text-yellow-600 duration-300">{famillyHomeDetails.estate_title}</h2>
                </div>
                <div className='flex items-center justify-between text-gray-400'>
                    <div className='flex items-center gap-2 text-gray-400'>
                        <FaLocationDot></FaLocationDot>
                        <p className='text-sm font-semibold'>{famillyHomeDetails.location}</p>
                    </div>
                    <p className='mr-5'>{famillyHomeDetails.area}</p>
                </div>
                <div className='my-4'>
                    <p className='font-bold'>Facilities</p>
                    <div className='p-3 text-gray-500'>
                        {
                            famillyHomeDetails.facilities.map((facilitie, index) => <li key={index}>{facilitie}</li>)
                        }
                    </div>
                </div>
                <p className="dark:text-gray-800">{famillyHomeDetails.description}</p>
            </div>
        </div>
    );
};

export default FamillyHomeDetails;