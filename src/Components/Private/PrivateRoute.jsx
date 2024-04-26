/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="w-full h-[80vh] flex items-center justify-center ">
            <span className="loading loading-bars loading-lg"></span>
        </div>;
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;