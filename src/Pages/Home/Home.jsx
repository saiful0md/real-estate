import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import NavBar from "../Shared/NavBar/NavBar";
const Home = () => {
    const estates = useLoaderData()
    console.log(estates);
    return (
        <div>
            <Helmet>
                <title>residensial | home</title>
            </Helmet>
            <NavBar></NavBar>
            <Banner></Banner>
        </div>
    );
};

export default Home;