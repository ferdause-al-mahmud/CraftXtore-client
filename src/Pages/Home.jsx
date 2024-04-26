import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CraftXtore | Home</title>
            </Helmet>
            <Banner></Banner>
            <div>
                <h1 className="text-2xl md:text-5xl font-semibold text-center mb-3">Choose your desire</h1>
                <p className="text-center text-[16px] md:text-xl text-gray-600 mb-6 w-[70%] mx-auto">Welcome to Resort seeker, where every stay is a story waiting to be written. Discover comfort, convenience, and genuine hospitality at every turn. Choose your destination.</p>
            </div>
        </div>
    );
};

export default Home;