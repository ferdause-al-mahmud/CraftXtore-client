import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner/Banner";
import CraftItem from "../Components/CraftItem/CraftItem";
import Blog from "../Components/Blog/Blog";
import Offer from "../Components/Offer/Offer";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CraftXtore | Home</title>
            </Helmet>
            <Banner></Banner>
            <CraftItem></CraftItem>
            <Offer></Offer>
            <Blog></Blog>
        </div>
    );
};

export default Home;