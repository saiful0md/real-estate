import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import FamillyHome from "../FamillyHouse/FamillyHome";
import Banner from "../Shared/Banner/Banner";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
import Townhouse from "../Townhouse/Townhouse";
const Home = () => {
    const data = useLoaderData()
    const singleFamillyHouse = data.single_family_homes;
    const townhouses = data.townhouses
    console.log(townhouses);
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
            <Footer></Footer>
        </div >
    );
};

export default Home;