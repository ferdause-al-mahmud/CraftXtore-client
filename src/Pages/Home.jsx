import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner/Banner";
import CraftItem from "../Components/CraftItem/CraftItem";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CraftXtore | Home</title>
            </Helmet>
            <Banner></Banner>
            <CraftItem></CraftItem>
        </div>
    );
};

export default Home;