import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <div className="max-w-7xl mx-auto">
                    <Navbar></Navbar>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
