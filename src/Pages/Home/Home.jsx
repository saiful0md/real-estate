import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Apartments from "../Apartments/Apartments";
import FamillyHome from "../FamillyHouse/FamillyHome";
import SeniorLivingCommunities from "../SeniorLivingCommunities/SeniorLivingCommunities";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
import Slider from "../Shared/Slider/Slider";
import StudentHousing from "../StudentHousing/StudentHousing";
import Townhouse from "../Townhouse/Townhouse";
import VacationRentals from "../VacationRentals/VacationRentals";
const Home = () => {
    const data = useLoaderData()
    const singleFamillyHouse = data.single_family_homes;
    const townhouses = data.townhouses
    const apartments = data.apartments
    const studenthousing = data.student_housing
    const seniorLivingCommunities = data.senior_living_communities
    const vacationRentals = data.vacation_rentals
    return (
        <div>
            <Helmet>
                <title>RealBizz | HOME</title>
            </Helmet>
            <NavBar></NavBar>
            <Slider></Slider>


            {/* loadData for single house */}
            <div className="max-w-xl text-center mx-auto">
                <h2 className="text-2xl font-bold my-4 text-center">Single Familly House</h2>
                <p>
                    A single-family house is a standalone home for one household, offering privacy and independence with its own outdoor space.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 my-10">
                {
                    singleFamillyHouse.map(estate =>
                        <FamillyHome
                            estate={estate}
                            key={estate.id}
                        ></FamillyHome>
                    )
                }</div>
            {/* loadData for townhouses house */}
            <div className="max-w-xl text-center mx-auto">
                <h2 className="text-2xl font-bold my-4">Townhouses</h2>
                <p>Townhouses are multi-level homes that share walls with neighbors, providing a blend of privacy and community living.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 my-10">
                {
                    townhouses.map(estate =>
                        <Townhouse
                            estate={estate}
                            key={estate.id}
                        ></Townhouse>
                    )
                }</div>
            {/* loadData for Apartments */}
            <div className="max-w-xl text-center mx-auto">
                <h2 className="text-2xl font-bold my-4">Apartments</h2>
                <p>Apartments are residential units within a larger building or complex, typically offering shared amenities and varying levels of privacy.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 my-10">
                {
                    apartments.map(estate =>
                        <Apartments
                            estate={estate}
                            key={estate.id}
                        ></Apartments>
                    )
                }</div>
            {/* loadData for student_housing */}
            <div className="max-w-xl text-center mx-auto">
                <h2 className="text-2xl font-bold my-4">Student Housing</h2>
                <p>Student housing specialized accommodation near campuses, fostering a conducive environment for academic and personal growth.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 my-10">
                {
                    studenthousing.map(estate =>
                        <StudentHousing
                            estate={estate}
                            key={estate.id}
                        ></StudentHousing>
                    )
                }</div>
            {/* loadData for SeniorLivingCommunities */}
            <div className="max-w-xl text-center mx-auto">
                <h2 className="text-2xl font-bold my-4">Senior Living Communities</h2>
                <p>Senior living communities offer tailored housing and amenities for older adults, fostering a supportive environment for retirement living.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 my-10">
                {
                    seniorLivingCommunities.map(estate =>
                        <SeniorLivingCommunities
                            estate={estate}
                            key={estate.id}
                        ></SeniorLivingCommunities>
                    )
                }</div>
            {/* loadData for VacationRentals */}
            <div className="max-w-xl text-center mx-auto">
                <h2 className="text-2xl font-bold my-4">Vacation Rentals</h2>
                <p>Vacation rentals temporary accommodation in private residences, offering flexibility and a home-away-from-home experience for travelers.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 my-10">
                {
                    vacationRentals.map(estate =>
                        <VacationRentals
                            estate={estate}
                            key={estate.id}
                        ></VacationRentals>
                    )
                }</div>
            <Footer></Footer>
        </div >
    );
};

export default Home;