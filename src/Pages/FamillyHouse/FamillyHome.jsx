import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const FamillyHome = ({estate}) => {
    const { id, estate_title, image, segment_name, description, location, price, area, facilities, status } = estate;
    useEffect(() => {
        AOS.init({ duration: 1200 });
    })
    return (
        <div  data-aos="fade-up" className="p-6 border justify-between shadow-lg card bg-base-100 dark:bg-gray-50 dark:text-gray-900">
            <div className='relative'>
                <img src={image} alt="" className="object-cover dark:opacity-90 object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className='absolute bottom-3 left-4'>
                    <p className='py-2 px-3 w-16 text-center text-white rounded-lg hover:bg-yellow-500 bg-yellow-600 duration-300 mb-2'>{status}</p>
                    <p className='text-2xl text-white drop-shadow-2xl bg-gray-900 bg-opacity-40 p-2 rounded-lg font-bold'>{price}</p>
                </div>
            </div>
            <p className="text-yellow-600  font-bold mt-6">{segment_name}</p>
            <div className="mt-4 mb-2">
                <h2 className="text-xl font-bold tracking-wide animate__animated animate__slideInDown animate__repeat-2 hover:text-yellow-600 duration-300">{estate_title}</h2>
            </div>
            <div className='flex items-center justify-between text-gray-400'>
                <div className='flex items-center gap-2 text-gray-400'>
                    <FaLocationDot></FaLocationDot>
                    <p className='text-sm font-semibold'>{location}</p>
                </div>
                <p className='mr-5'>{area}</p>
            </div>
            <div className='my-4'>
                <p className='font-bold'>Facilities</p>
                <div className='p-3 text-gray-500'>
                    {
                        facilities.map((facilitie, index) => <li key={index}>{facilitie}</li>)
                    }
                </div>
            </div>
            <p className="dark:text-gray-800">{description}</p>
            <Link to={`/famillyHomeDetails/${id}`} className=''>
                <button className='py-2 px-3 my-3 text-center text-white rounded-lg hover:bg-yellow-500 bg-yellow-600 duration-300  w-full '>View Property</button>
            </Link>
        </div>

    );
};

FamillyHome.propTypes = {
    estate: PropTypes.object
}

export default FamillyHome;