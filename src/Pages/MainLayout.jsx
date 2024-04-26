import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen font-urbanist">
            <div className="flex-grow ">
                <Navbar></Navbar>
                <div className="lg:w-[1170px] max-w-[1440px] mx-auto">
                    <Outlet></Outlet>
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;