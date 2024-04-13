
import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";


const TownhousesDetails = () => {
    const data = useLoaderData()
    const townhouses = data.townhouses;
    const { id } = useParams();
    const idInt = parseInt(id);
    const townhousesDetails = townhouses.find(estate => estate.id === idInt)
   
    return (
        <div>
            <Helmet>
                <title>RealBizz | Townhouses Details</title>
            </Helmet>
            <NavBar></NavBar>
            <div className="p-6 border rounded-md shadow-lg card bg-base-100 dark:bg-gray-50 dark:text-gray-900">
                <div className='relative'>
                    <img src={townhousesDetails.image} alt="" className="object-cover dark:opacity-90 object-center w-full rounded-md  dark:bg-gray-500" />
                    <div className='absolute bottom-3 left-4'>
                        <p className='py-2 px-3 w-16 text-center text-white rounded-lg hover:bg-yellow-500 bg-yellow-600 duration-300 mb-2'>{townhousesDetails.status}</p>
                        <p className='text-2xl text-white drop-shadow-2xl bg-gray-900 bg-opacity-40 p-2 rounded-lg font-bold'>{townhousesDetails.price}</p>
                    </div>
                </div>
                <p className="text-yellow-600 font-bold mt-6">{townhousesDetails.segment_name}</p>
                <div className="mt-4 mb-2">
                    <h2 className="text-xl font-bold tracking-wide hover:text-yellow-600 duration-300">{townhousesDetails.estate_title}</h2>
                </div>
                <div className='flex items-center justify-between text-gray-400'>
                    <div className='flex items-center gap-2 text-gray-400'>
                        <FaLocationDot></FaLocationDot>
                        <p className='text-sm font-semibold'>{townhousesDetails.location}</p>
                    </div>
                    <p className='mr-5'>{townhousesDetails.area}</p>
                </div>
                <div className='my-4'>
                    <p className='font-bold'>Facilities</p>
                    <div className='p-3 text-gray-500'>
                        {
                            townhousesDetails.facilities.map((facilitie, index) => <li key={index}>{facilitie}</li>)
                        }
                    </div>
                </div>
                <p className="dark:text-gray-800">{townhousesDetails.description}</p>
            </div>
        </div>
    );
};

export default TownhousesDetails;
