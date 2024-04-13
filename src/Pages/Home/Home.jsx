import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Apartments from "../Apartments/Apartments";
import FamillyHome from "../FamillyHouse/FamillyHome";
import SeniorLivingCommunities from "../SeniorLivingCommunities/SeniorLivingCommunities";
import Banner from "../Shared/Banner/Banner";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
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
            <Banner></Banner>


            {/* loadData for single house */}
            <h2 className="text-2xl font-bold my-4">Single Familly House</h2>
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
            <h2 className="text-2xl font-bold my-4">Townhouses</h2>
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
            <h2 className="text-2xl font-bold my-4">Apartments</h2>
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
            <h2 className="text-2xl font-bold my-4">Student Housing</h2>
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
            <h2 className="text-2xl font-bold my-4">Senior Living Communities</h2>
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
            <h2 className="text-2xl font-bold my-4">Vacation Rentals</h2>
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