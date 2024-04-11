import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Estates from "../Estates/Estates";
import Banner from "../Shared/Banner/Banner";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
const Home = () => {
    const estates = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>RealBizz | HOME</title>
            </Helmet>
            <NavBar></NavBar>
            <Banner></Banner>
            <div className="grid md:grid-cols-3 gap-4 my-10">
                {
                estates.map(estate => 
                    <Estates
                        estate={estate}
                    key={estate.id}

                    ></Estates>
               )
            }</div>
            <Footer></Footer>
        </div >
    );
};

export default Home;